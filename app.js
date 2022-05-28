// const paraGraph = document.getElementById('my-par');
// paraGraph.style.color="blue";

// const buton = document.getElementById("btn");
// buton.style.color ="black";
// buton.style.backgroundColor ="orange";
// buton.innerHTML ="ara";
// buton.style.fontSize = 20;

// const resim = getElementByTagName("img");
// resim[0].style.borderStyle ="solid";
// resim[0].style.borderColor ="black";

// const fatih = document.getElementsByClassName("header");
// fatih[0].innerHTML="DOM manipülasyon Çok İlginç";
// fatih[0].style.fontSize = 15;
// fatih[0].style.color = "blue";
// fatih[0].stle.fontFamily ="Tahoma";

// const body = document.querySelector("#body");
// body.style.backgroundImage ="linear-gradient(to right,green,yellow)";

// const title = document.querySelector(".title");
// title.innerHTML="Dom örnekleri 😨";

// const header = document.querySelector(".header");
// const yazıMavi = () => header.style.color = "blue";
// const yazıSiyah = () => header.style.color ="black";

// document.querySelector(".header").onmouseover = function () {
//   document.querySelector(".header").style.color = "blue";
// };
// document.querySelector(".header").onmouseout = function () {
//   document.querySelector(".header").style.color = "black";
// };

// document.querySelector(".header").addEventListener("mouseout", () => {
// document.querySelector(".header").style.color =
// "black";
// })
// // document.querySelector(".header").addEventListener("mouseover", funciton(){
// //   let ayse = document.querySelector(".header").style.color = "blue"
// // });
// document.querySelector(".header").addEventListener("mouseover",() =>{
//   document.querySelector(".header").style.color = "blue"
// });
const buton = document.getElementById("btn");
// buton.style.color ="black";
// buton.style.backgroundColor ="orange";
document.getElementById("btn").onclick = () => {
  document.getElementById("body").style.backgroundColor = "green";
  document.getElementById("btn").innerHTML = "BAS";
};
// document.getElementById("btn").onclick = function () {
//   document.getElementById("body").style.backgroundColor = "green";
//   document.getElementById("btn").innerHTML = "BAS";
// };
