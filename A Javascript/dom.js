// Méthode de sélection

// const logoElement = document.getElementById("logo");
// console.log(logoElement);

// const main = document.querySelector(".main")
// console.log(main);
// const navlist = document.querySelector("#logo");
// console.log(navlist);
// const header = document.querySelector(".header")
// console.log(header);
// const footer = document.querySelector(".footer")
// console.log(footer);
// header.classList.add("class-a", "class-b", "class-c")
// header.classList.remove("class-b", "class-c")

// function hello(){
// let monom = "faris"
// window.alert("bonjour" + monom);
// }

// document.addEventListener("DOMContentLoaded", test)
// document.addEventListener("DOMContentLoaded", function () {
   
//  const logoElement = document.getElementById("logo");
//     console.log(logoElement);
//     const main = document.querySelector(".main");
//     console.log(main);
//     const li = document.querySelectorAll("li");
//     console.log(li);

// });

// document.addEventListener("DOMContentLoaded", function () {
//     // const button1 = document.querySelector("button:first-of-type");
//     const button2 = document.querySelector("button:last-of-type");
//     console.log(button1,button2);

//     button1.addEventListener("dblclick", function(){
//         console.log("vous avez clicker sur le boutton 1");
//     }
//     )
    
//     button2.addEventListener("dblclick", function(){
//         console.log("vous avez clicker sur le boutton 2");
//     }
//     )
//     const input = document.querySelector("input:last-of-type")
//     input.addEventListener("click", function(event){
//      event.preventDefault()
//         console.log("vous avez clicker sur le submit");
//     }
//     )
   
    
// });
// let counter=0;
// let end;

//     let Start= document.getElementById("start")
//     Start.addEventListener("click", function(){
//         end = setInterval(function (){
         
//         console.log(counter++)

//     }, 1000);
//     })

//     let Stop= document.getElementById("stop");
//     Stop.addEventListener("click", function(){
//       clearInterval(end)
      
//     });


// let intervalId= setInterval(function (){
//     counter++
//    console.log(counter)
// }, 2000);


// const logo = document.getElementById("logo")
// console.log(logo.innerHTML);
// console.log(logo.innerText);
// console.log(logo.textContent);

// innerText.logo = "arcidesign"


 let counter=0;
 let end;
 const Démarrer = document.querySelector("div button:first-of-type");
 const Arrêter = document.querySelector(" div button:last-of-type");
     let demarrer = document.getElementById("resultat")
     demarrer.addEventListener("click", function(){
         end = setInterval(function (){
         document.getElementById("resultat").innerText

     }, 1000);
     })

     let arreter= document.getElementById("resultat");
     arreter.addEventListener("click", function(){
       clearInterval(end)
      
     });


