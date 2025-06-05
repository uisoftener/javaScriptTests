const demo = document.getElementById("demo");
const originalText = demo.textContent;

const car = new Object();
car.name = "bmw";
car.year = 2023;
car.model = "Opel Corsa";

function showCarInfo(){
    window.alert(car.name + " " + car.year + " " + car.model);
}

function changeTxt(){
    document.getElementById("demo").innerText = "demo text değişti.";
    console.log("test");
    window.alert(5+11);
}
function showItemFunc(){
    document.getElementById("demo").style.display = "block";
}
function makeBiggerText(){
    document.getElementById("demo").style.fontSize = "35px";
}
function hiddenItemFucn(){
    document.getElementById("demo").style.display = "none";
}
function makeSmallerText(){
    document.getElementById("demo").style.fontSize = "16px";
}
function makeOriginalText(){
    document.getElementById("demo").innerText = originalText;
}