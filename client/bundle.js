(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
