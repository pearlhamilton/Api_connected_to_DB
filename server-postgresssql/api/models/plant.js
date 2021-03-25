
const db = require ('../dbConfig')


class Plant {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.light = data.light;
        this.weeks_kept_alive = data.weeks_kept_alive
    }

    // static get all() {
    //     const plants = plantsData.map((plant) => new Plant(plant));
    //     return plants;
    // }


    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const plantsData = await db.query(`SELECT * FROM plants;`)
                const plants = plantsData.rows.map(plant => new Plant(plant))
                resolve(plants);
            } catch (err) {
                reject("Error retrieving plants")
            }
        })
    }



//     static findById(id) {
//         try {
//             const plantData = plantsData.filter((plant) => plant.id === id)[0];
//             const plant = new Plant(plantData);
//             return plant;
//         } catch (err) {
//             throw new Error('That plant does not exist!');
//         }
//     }

static findById (id) {
    return new Promise (async (resolve, reject) => {
        try {
            let plantData = await db.query(`SELECT * FROM plants WHERE id = $1;`, [ id ]);
            // console.log(plantData)
            let plant = new Plant(plantData.rows[0]);
            // console.log(plant)
            resolve (plant);
        } catch (err) {
            reject('Plant not found');
        }
    });
}





//     static create(plant) {
//         const newPlantId = plantsData.length + 1;
//         const newPlant = new Plant({ id: newPlantId, ...plant });
//         plantsData.push(newPlant);
//         return newPlant;
//     }


static create(name, light, weeks_kept_alive){
    return new Promise (async (resolve, reject) => {

  try {
      let plantData = await db.query('INSERT INTO plants(name, light, weeks_kept_alive) VALUES ($1, $2, $3) RETURNING *;', [name, light, weeks_kept_alive])
      let newPlant = new Plant(plantData.rows[0]);
      resolve(newPlant)
  } catch (error) {
      reject ('Error creating plant')
  }
})
}





//    static destroy(id) {
//         // const plant = plantsData.filter((plant) => plant.id === this.id)[0];
//         // plantsData.splice(plantsData.indexOf(plant), 1);

//                 const plantToDelete = plantsData.filter((plant) => plant.id === id)[0];
               
//                 plantsData.splice(plantsData.indexOf(plantToDelete),1)

//     }


static destroy(id){
    return new Promise(async(resolve, reject) => {
        try {
            await db.query('DELETE FROM plants where id = $1;', [id]);
            resolve("Plant was deleted")
        } catch (error) {
            reject("Plant could not be deleted")
            
        }
    })
}

update() {
    return new Promise (async (resolve, reject) => {
        try {
            let updatedPlantData = await db.query(`UPDATE plants SET weeks_kept_alive = weeks_kept_alive + 1 WHERE id = $1 RETURNING *;`, [ this.id ]);
            console.log(updatedPlantData)
            let updatedPlant = new Plant(updatedPlantData.rows[0]);
            console.log(updatedPlant)
            resolve(updatedPlant);
        } catch (err) {
            reject('Error updating plant');
        }
    });
}





//     update(updateData) {
//         const plantData = plantsData.find(plant => plant.id === this.id)
//         const index = plantsData.indexOf(plantData)
//         const updatedPlantData = { ...plantData, ...updateData}
//         plantsData[index] = updatedPlantData
//         const updatedPlant = new Plant(updatedPlantData)
//         console.log(updatedPlant)
//         return updatedPlant

//     }

}



module.exports = Plant;