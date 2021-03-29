const express = require('express');
const router = express.Router();

const Plant = require('../models/plant');

router.get('/', async (req, res) => {
    try {const plantsData = await Plant.all;
    res.send(plantsData);
    }
    catch(err) {
        res.status(500).json({err})

    }
});


// router.get('/', async (req, res) => {
//     try {
//         const dogs = await Dog.all
//         res.json({dogs})
//     } catch(err) {
//         res.status(500).json({err})
//     }
// })


router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(parseInt(req.params.id))
        res.json(plant)
    } catch(err) {
        res.status(404).json({err})
    }
})




router.post('/', async (req, res) => {
    try {
        const plant = await Plant.create(req.body.name, req.body.light, req.body.weeks_kept_alive)
        res.json(plant).status(201)
    } catch(err) {
        res.status(404).json({err})
    }
})

// router.post('/', (req, res) => {
//     const data = req.body;
//     const newPlant = Plant.create(data);
//     res.status(201).send(newPlant);
// });

// router.delete('/:id', (req, res) => {


//     const plantId = parseInt(req.params.id) 
//     const deletedPlant = Plant.destroy(plantId)
//     res.send("done")

// });


router.delete('/:id', async (req, res) => {

    try{
    const plantId = parseInt(req.params.id) 
    await Plant.destroy(plantId)
    res.send("done")
    }
    catch(err){
        res.status(500).json({err})
    }

});





router.patch('/:id', async (req,res) => {
    try{
    const planttoUpdate = await Plant.findById(parseInt(req.params.id))
    const updatedPlant= await planttoUpdate.update(req.body.name, req.body.light, req.body.weeks_kept_alive)
    res.json({plant: updatedPlant})
    }

    catch (err){
        res.status(500).json({err})



    }
    
});


// router.patch('/:id', async (req, res) => {
//     try {
//         const dog = await Dog.findById(parseInt(req.params.id))
//         const updatedDog = await dog.update(req.body.name, req.body.age)
//         res.json({dog: updatedDog})
//     } catch(err) {
//         res.status(500).json({err})
//     }
// })




module.exports = router;
