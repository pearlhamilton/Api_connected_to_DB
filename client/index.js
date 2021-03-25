const newPlantForm = document.querySelector('form');
const yourPlantSection = document.getElementById('yourPlantsSection')


window.addEventListener("load", addAllPlants);


function addAllPlants(){
    fetch("http://localhost:3000/plants/")
    .then(r => r.json())
    .then(addPlants)
    .catch(console.warn)
}






newPlantForm.addEventListener('submit', changeColor)


function changeColor(e){
    e.preventDefault()
    document.querySelector('body').style.color ="green";
}


//helpers

function addPlants(plantData){
    plantData.forEach(data => addEachPlant(data))

}

function addEachPlant(plantdata){
    const newDiv = document.createElement('div');
    newDiv.textContent = plantdata.name
    yourPlantSection.append(newDiv)
}