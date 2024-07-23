/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")

let convert1 = document.getElementById("conversion1")
let convert2 = document.getElementById("conversion2")
let convert3 = document.getElementById("conversion3")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    convert1.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters` 
    convert2.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters` 
    convert3.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`
    
})


const hero = document.getElementById("hero")
const main = document.getElementById("main-bckg")

const toggle = document.getElementById("toggle")

toggle.addEventListener("click", function() {
    hero.classList.toggle("dark-mode")
    main.classList.toggle("dark-mode")
})
