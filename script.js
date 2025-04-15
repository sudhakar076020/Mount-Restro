let TNitems = document.getElementById("tnItems");
let KLitems = document.getElementById("klItems");
let NIitems = document.getElementById("niItems");
let APitems = document.getElementById("apItems");



let tamilNaduMenuEl = document.getElementById("tamilNaduMenu");
let keralaMenuEl = document.getElementById("keralaMenu");
let northIndianMenuEl = document.getElementById("northIndianMenu");
let andhraPradeshMenuEl = document.getElementById("andhraPradeshMenu");


keralaMenuEl.classList.add("d-none");
northIndianMenuEl.classList.add("d-none");
andhraPradeshMenuEl.classList.add("d-none");


TNitems.addEventListener("click", function(event){
    tamilNaduMenuEl.classList.remove("d-none");

    keralaMenuEl.classList.add("d-none");
    northIndianMenuEl.classList.add("d-none");
    andhraPradeshMenuEl.classList.add("d-none");

    TNitems.classList.toggle("selected-menu");
})

KLitems.addEventListener("click", function(event){
    keralaMenuEl.classList.remove("d-none");

    tamilNaduMenuEl.classList.add("d-none");
    northIndianMenuEl.classList.add("d-none");
    andhraPradeshMenuEl.classList.add("d-none");
})


NIitems.addEventListener("click", function(event){
    northIndianMenuEl.classList.remove("d-none");

    tamilNaduMenuEl.classList.add("d-none");
    keralaMenuEl.classList.add("d-none");
    andhraPradeshMenuEl.classList.add("d-none");
})


APitems.addEventListener("click", function(event){
    andhraPradeshMenuEl.classList.remove("d-none");

    tamilNaduMenuEl.classList.add("d-none");
    keralaMenuEl.classList.add("d-none");
    northIndianMenuEl.classList.add("d-none");
})