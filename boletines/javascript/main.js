
let links = document.querySelectorAll(".close");

//Recorrer

links.forEach(function(link){
   //agregar un evento click a cada mundo
   link.addEventListener("click",function(ev){
     ev.preventDefault();
     let content = document.querySelector('.content');

     //quitar clases de animaciones que ya tiene
     content.classList.remove("fadeInDown");
     content.classList.remove("animated");

     //agregar clases para animar salida
     content.classList.add("fadeOutUp");
     content.classList.add("animated");

     setTimeout(function(){
       location.href = "/boletines/";
     },600);

     return false;

   })
})
