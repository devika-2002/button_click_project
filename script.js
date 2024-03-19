const box=document.getElementById("row");

const bluebut=document.getElementById("Bluebut");
bluebut.addEventListener("click" ,function(){
    box.style.backgroundColor="Blue";
})

const yellowgreenbut=document.getElementById("Yellowgreenbut");
yellowgreenbut.addEventListener("click",function(){
    box.style.backgroundColor="yellowgreen";
})

const orangebut=document.getElementById("Orangebut");
orangebut.addEventListener("click",function(){
    box.style.backgroundColor="orange";
})

const graybut=document.getElementById("Graybut");
graybut.addEventListener("click",function(){
    box.style.backgroundColor="gray";
})