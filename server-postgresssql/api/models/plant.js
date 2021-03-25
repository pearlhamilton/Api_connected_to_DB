const plantsData = [
    { id: 1, name: "Devil's Ivy", lightNeeds: "Not fussy"},
    { id: 2, name: 'Boston Fern', lightNeeds: "Lower light"},
    { id: 3, name: 'Aloe Vera', lightNeeds: "Bright light"}
]


class Plant {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.lightNeeds = data.lightNeeds;
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
}

module.exports = Plant;