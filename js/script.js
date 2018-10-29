


var carre1 = document.getElementById("carre1");
var carre2 = document.getElementById("carre2");
var carre3 = document.getElementById("carre3");
var carre4 = document.getElementById("carre4");
var carre5 = document.getElementById("carre5");
var carre6 = document.getElementById("carre6");
var carre7 = document.getElementById("carre7");
var carre8 = document.getElementById("carre8");
var carre9 = document.getElementById("carre9");
var carre10 = document.getElementById("carre10");
var carre11 = document.getElementById("carre11");
var carre12 = document.getElementById("carre12");
var carre13 = document.getElementById("carre13");
var carre14 = document.getElementById("carre14");
var carre15 = document.getElementById("carre15");
var carre16 = document.getElementById("carre16");

carre1.addEventListener("click",changeColor,false);
carre2.addEventListener("click",changeColor,false);
carre3.addEventListener("click",changeColor,false);
carre4.addEventListener("click",changeColor,false)
carre5.addEventListener("click",changeColor,false);
carre6.addEventListener("click",changeColor,false);
carre7.addEventListener("click",changeColor,false);
carre8.addEventListener("click",changeColor,false);
carre9.addEventListener("click",changeColor,false);
carre10.addEventListener("click",changeColor,false);
carre11.addEventListener("click",changeColor,false);
carre12.addEventListener("click",changeColor,false);
carre13.addEventListener("click",changeColor,false);
carre14.addEventListener("click",changeColor, false);
carre15.addEventListener("click",changeColor,false);
carre16.addEventListener("click",changeColor, false);

function changeColor(){
  if(this.classList.contains("white")){
    this.classList.remove("white");
    this.classList.add("red");
  }else if(this.classList.contains("red")){
    this.classList.remove("red");
    this.classList.add("blue")
  }else if(this.classList.contains("blue")){
    this.classList.remove("blue");
    this.classList.add("yellow");
  }else if(this.classList.contains("yellow")){
  this.classList.remove("yellow");
  this.classList.add("white");
}}

console.log(this)
