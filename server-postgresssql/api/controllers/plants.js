const express = require('express');
const router = express.Router();

const Plant = require('../models/plant');

router.get('/', (req, res) => {
    const plantsData = Plant.all;
    res.send(plantsData);
});

router.get('/:id', (req, res) => {
    try {
        const plantId = parseInt(req.params.id);
        const selectedPlant = Plant.findById(plantId);
        res.send(selectedPlant);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newPlant = Plant.create(data);
    res.status(201).send(newPlant);
});

router.delete('/:id', (req, res) => {


    const plantId = parseInt(req.params.id) 
    const deletedPlant = Plant.destroy(plantId)
    res.send("done")

});

router.patch('/:id', (req,res) => {
    const planttoUpdate = Plant.findById(parseInt(req.params.id))
    const updatedPlant= planttoUpdate.update({weeksKeptAlive: planttoUpdate.weeksKeptAlive + 1})
    res.json({plant: updatedPlant})
    
});



module.exports = router;
