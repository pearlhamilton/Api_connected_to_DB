const plantsData = [
    { id: 1, name: "Devil's Ivy", lightNeeds: "Not fussy", weeksKeptAlive: 0},
    { id: 2, name: 'Boston Fern', lightNeeds: "Lower light", weeksKeptAlive: 0 },
    { id: 3, name: 'Aloe Vera', lightNeeds: "Bright light", weeksKeptAlive: 0}
]


// const db = require ('../dbConfig')


class Plant {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.lightNeeds = data.lightNeeds;
        this.weeksKeptAlive = data.weeksKeptAlive
    }

    static get all() {
        const plants = plantsData.map((plant) => new Plant(plant));
        return plants;
    }

    static findById(id) {
        try {
            const plantData = plantsData.filter((plant) => plant.id === id)[0];
            const plant = new Plant(plantData);
            return plant;
        } catch (err) {
            throw new Error('That plant does not exist!');
        }
    }

    static create(plant) {
        const newPlantId = plantsData.length + 1;
        const newPlant = new Plant({ id: newPlantId, ...plant });
        plantsData.push(newPlant);
        return newPlant;
    }

   static destroy(id) {
        // const plant = plantsData.filter((plant) => plant.id === this.id)[0];
        // plantsData.splice(plantsData.indexOf(plant), 1);

                const plantToDelete = plantsData.filter((plant) => plant.id === id)[0];
               
                plantsData.splice(plantsData.indexOf(plantToDelete),1)

    }

    update(updateData) {
        const plantData = plantsData.find(plant => plant.id === this.id)
        const index = plantsData.indexOf(plantData)
        const updatedPlantData = { ...plantData, ...updateData}
        plantsData[index] = updatedPlantData
        const updatedPlant = new Plant(updatedPlantData)
        console.log(updatedPlant)
        return updatedPlant

    }

}



module.exports = Plant;