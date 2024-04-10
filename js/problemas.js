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
