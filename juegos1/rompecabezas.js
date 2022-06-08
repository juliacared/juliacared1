function desordenar(){
  var piezas2 = document.querySelector('.tablero2');
  for (var i = piezas2.children.length; i >= 0; i--) {
      piezas2.appendChild(piezas2.children[Math.random() * i | 0]);
  }
};

var empezar = document.querySelector("#empezar");

empezar.addEventListener('click', function (){     
//    this.textContent = "jugar de nuevo";
    location.reload();
});

desordenar();


var tablero1 = document.querySelector(".tablero1");
var tablero2 = document.querySelector(".tablero2");
var clase = tablero1.getAttribute("class")

console.log(clase)

tablero2.addEventListener('dragstart', (e) => {
    var ficha = e.target.getAttribute("id");
    e.dataTransfer.setData('id', ficha);
    
    console.log(ficha);
});

//tablero2.addEventListener('dragstart', (e) => {
//    e.dataTransfer.setData('id', e.target.id);
//     console.log("start");
//});

tablero1.addEventListener('dragover', (e) => {
    e.preventDefault();
    if(e.target.getAttribute("class") === "p-opaca"){
        e.target.parentNode.classList.add("colocar");
//        e.target.remove();            
    }   
})

tablero1.addEventListener('dragleave', (e) => {    
    if(e.target.getAttribute("class") === "p-opaca"){
        e.target.parentNode.classList.remove("colocar");            
    }   
})

//tablero1.addEventListener('drop', (e) => {
//    e.target.parentNode.classList.remove("colocar");
//    var id = e.target.parentElement.getAttribute("id");
//    
//    console.log (id);
//})


tablero1.addEventListener('drop', (e) => {
    e.target.parentNode.classList.remove("colocar");
    var id = e.dataTransfer.getData('id');
    var numero = id.split('_')[1];
    var aciertos = document.querySelector("#aciertos");
    var aciertos2 = aciertos.innerHTML;
    var desaciertos = document.querySelector("#desaciertos");
    var desaciertos2 = desaciertos.innerHTML;
    
    console.log('pieza:', numero)
    console.log ('caja:', e.target.parentElement.getAttribute("id"))
    if(e.target.parentElement.getAttribute("id") === numero) {
        
        e.target.parentElement.appendChild(document.getElementById(id));        
        e.target.remove();
        
        
        aciertos2++;        
        console.log(aciertos2);
        aciertos.innerHTML= aciertos2;
        ganaste2();
        
        var sonido1 = document.getElementById("sonido1");
        sonido1.play();
    }
    
    else {
        desaciertos2++; 
        console.log("mal");               
        console.log(desaciertos2);
        desaciertos.innerHTML= desaciertos2;
    }
    
    
});

//CRONOMETRAR
var cronometrar;
var imgChica = document.querySelector(".imgChica");
var aciertos = document.querySelector(".aciertos");
var cronometro = document.querySelector(".cronometro"); 

tablero2.addEventListener('mousedown', function empezarCronometro(e){    
    this.removeEventListener(e.type, empezarCronometro);
    
    imgChica.classList.add("blur");
    aciertos.classList.add('pieza-activa');
    cronometro.classList.add('pieza-activa');
    
        var minutero = 0;
        var segundero = 0+1;
        var min = document.querySelector("#minutos");
        var seg = document.querySelector("#segundos");
           
  
    
  cronometrar = setInterval(function (){        
        
        segundero = ('0' + segundero).slice(-2);
        minutero = ('0' + minutero).slice(-2);
        
        seg.innerHTML= segundero;        
        segundero++;
        min.innerHTML= minutero;
        
        if (segundero > 59) {
            segundero = 0;
            minutero++;            
        }
        
        if(segundero <= 59) {
           
        }
        else {
            
        }        
        
    },1000);    
    
});

//AL GANAR

function ganaste2 () {
    var aciertos = document.querySelector("#aciertos");
    if(aciertos.innerHTML==="12"){
        
        clearInterval(cronometrar);
        imgChica.classList.remove("blur");
        
        var sonido2 = document.getElementById("sonido2");
        sonido2.play();
        
        tablero2.remove();
        let nuevoTablero = document.createElement("div");
        nuevoTablero.className ="tablero3";
        let imagenNueva = document.createElement("img");
        imagenNueva.src ="ganaste.jpg";        
        nuevoTablero.appendChild(imagenNueva);
        
        
        let botonNuevo = document.createElement("button");
        let enlace = document.createElement("a");
        let textoBoton = document.createTextNode("► SIGUIENTE NIVEL");
        enlace.setAttribute("href", "../juegos2/index.html");        
        botonNuevo.className="botonNuevo";
        botonNuevo.appendChild(enlace);
        enlace.appendChild(textoBoton);
        nuevoTablero.appendChild(botonNuevo);       

        document.querySelector(".tableros").appendChild(nuevoTablero);       
             
        
        let casillas = document.querySelectorAll(".casilla1");
        for(i=0; i<casillas.length; i++){
        casillas[i].classList.add("casilla1-b");
        }
        
        
        
     }
    
}

//PANELES FLOTANTES 

var juegoEntero = document.querySelector(".contenido");

juegoEntero.addEventListener('click', function(e){    
    var flotante2 = document.querySelector(".flotante2");
    var info = document.querySelector("#info");
    var rayita1 = document.querySelector(".rayita1");
    
    if(e.target.getAttribute("id")==="info"){
        flotante2.classList.toggle("pieza-activa3");
        e.target.classList.toggle("pieza-activa2");
        rayita1.classList.toggle("pieza-activa3");
    }
    else if(e.target.getAttribute("id")!=="info") {
        flotante2.classList.remove("pieza-activa3");
        info.classList.remove("pieza-activa2");
        rayita1.classList.remove("pieza-activa3");
    } 
    
});

juegoEntero.addEventListener('click', function(e){
    var flotante1 = document.querySelector(".flotante1");
    var nivel = document.querySelector("#nivel");
    var rayita2 = document.querySelector(".rayita2");
    
    if(e.target.getAttribute("id")==="nivel"){
        flotante1.classList.toggle("pieza-activa3");
        e.target.classList.toggle("pieza-activa2");
        rayita2.classList.toggle("pieza-activa3");
    }
    else if(e.target.getAttribute("id")!=="nivel") {
        flotante1.classList.remove("pieza-activa3");        
        nivel.classList.remove("pieza-activa2");
        rayita2.classList.remove("pieza-activa3");
    } 
    
});





















