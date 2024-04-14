function validarLetras(event){
    var teclado = (document.all)? event.keyCode : event.which;
    if (teclado == 13 || teclado == 8 || teclado == 32) {
        return true;
    }
    
    if ((teclado >= 65 && teclado <= 90) || (teclado >= 97 && teclado <= 122)) {
        
        return true;
    }
    
    event.preventDefault();
}

function invertir(){
    var palabra = document.getElementById("p1-input").value;
    var inversion = palabra.split("").reverse("").join("");   
     alert("La palabra invertida es: "+inversion);
}

function borrarDatos(){
    document.getElementById("p1-input").value = "";
}

function validarNúmeros(event){
    var tecladonum = (document.all)? event.keyCode : event.which;
    if(tecladonum == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(tecladonum);
    return patron.test(codigo);
}

function vectores(){
    var x1 = document.getElementById("p2-x1").value;
    var x2 = document.querySelector("#p2-x2").value;
    var x3 = document.querySelector("#p2-x3").value;
    var x4 = document.querySelector("#p2-x4").value;
    var x5 = document.querySelector("#p2-x5").value;

    var y1 = document.querySelector("#p2-y1").value;
    var y2 = document.querySelector("#p2-y2").value;
    var y3 = document.querySelector("#p2-y3").value;
    var y4 = document.querySelector("#p2-y4").value;
    var y5 = document.querySelector("#p2-y5").value;

    var vectorx= [x1, x2, x3, x4, x5];
    var vectory = [y1,y2,y3,y4,y5];

    function ordenar(a, b){
        return a-b;
    }
    
    vectorx.sort(ordenar);
    vectory.sort(ordenar);
    var producto=0;
    for(var i=0; i<vectorx.length; i++){      
        producto=producto + (vectorx[i]*vectory[i]);
    }

    alert("Los números ordenados son: "+vectorx+" y "+vectory+" y el producto escalar mínimo es de : "+producto);
}

function borrarVectores(){
    document.getElementById("p2-x1").value = "";
    document.getElementById("p2-x2").value = "";
    document.getElementById("p2-x3").value = "";
    document.getElementById("p2-x4").value = "";
    document.getElementById("p2-x5").value = "";

    document.getElementById("p2-y1").value = "";
    document.getElementById("p2-y2").value = "";
    document.getElementById("p2-y3").value = "";
    document.getElementById("p2-y4").value = "";
    document.getElementById("p2-y5").value = "";
}

function validarLetras2(event){
    var teclado2 = (document.all)? event.keyCode : event.which;
    if (teclado2 == 13 || teclado2 == 8 || teclado2 == 44) {
        return true;
    }
    if ((teclado2 >= 65 && teclado2 <= 90)) {   
        return true;
    } 
    event.preventDefault();
}

var listaPalabras=[];

function insertarOtra(){      
    var palabra= document.getElementById("p3-input").value.trim();
    if(palabra !==""){
        listaPalabras.push(palabra);
        document.getElementById("p3-input").value=""
    }
    
}

function calcularPalabra(){
    var listaPalabrasNuevas = [];
    for (var i = 0; i < listaPalabras.length; i++) {
        var contenedorPalabra = listaPalabras[i];
        var palabraNueva = "";
        for (var j = 0; j < contenedorPalabra.length; j++) {
            var letra = contenedorPalabra[j];
            var encontrarPalabraRepetida = false;
            for (var k = 0; k < palabraNueva.length; k++) {
                if (palabraNueva[k] === letra) {
                    encontrarPalabraRepetida = true;
                    break;
                }
            }
            if (!encontrarPalabraRepetida) {
                palabraNueva += letra;
            }
        }
        listaPalabrasNuevas.push(palabraNueva);
    }
    var maximaPalabra=listaPalabrasNuevas[0];
    for(var i=1; i<listaPalabrasNuevas.length; i++){
        if(listaPalabrasNuevas[i].length>maximaPalabra.length){
            maximaPalabra=listaPalabrasNuevas[i]
        }
    }
    alert("La lista original es: "+listaPalabras+"\n"+"La lista con las nuevas palabras es: "+listaPalabrasNuevas+"\n"+"La palabra con mas caracteres individuales es: "+maximaPalabra+" con "+maximaPalabra.length+" caracteres");
}

function borrarLista(){
    listaPalabras=[]
}