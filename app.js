function prepararEntrada(){ 
    let entrada = [];
    let texto = "";
    texto = document.getElementById('texto-ingresado').value.toLowerCase();
    entrada = Array.from(texto);
    return entrada;
}

function mostrarCuadroResultado(){
    let cuadro = document.getElementById('no-texto');
    let resultado = document.getElementById('resultado');
    cuadro.style.display = 'none';
    resultado.style.display = 'block';
}

function imprimirResultado(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function copiar() {
    let texto = document.getElementById('texto-encriptado').innerHTML;
    navigator.clipboard.writeText(texto);
}

function prepararEncriptar(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]) {
            case "a":
                arreglo.splice(i+1,0,"i");
                i = i+1;
                break;
            case "e":
                arreglo.splice(i+1,0,"n","t","e","r");
                i = i+4;
                break;
            case "i":
                arreglo.splice(i+1,0,"m","e","s");
                i = i+3;
                break;
            case "o":
                arreglo.splice(i+1,0,"b","e","r");
                i = i+3;
                break;
            case "u":
                arreglo.splice(i+1,0,"f","a","t");
                i = i+3;
                break;
        }
    }
    return arreglo;
}

function prepararDesencriptar(arreglo){
    let semiLista = [];

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == "a" && (arreglo[i+1] == "i")) {
            semiLista.push("a");
            i = i+1;
        }else if (arreglo[i] == "e" && (arreglo[i+1] == "n") && (arreglo[i+2] == "t") && (arreglo[i+3] == "e") && (arreglo[i+4] == "r")){
            semiLista.push("e");
            i = i+4;
        }else if (arreglo[i] == "i" && (arreglo[i+1] == "m") && (arreglo[i+2] == "e") && (arreglo[i+3] == "s")){
            semiLista.push("i");
            i = i+3;
        }else if (arreglo[i] == "o" && (arreglo[i+1] == "b") && (arreglo[i+2] == "e") && (arreglo[i+3] == "r")){
            semiLista.push("o");
            i = i+3;
        }else if (arreglo[i] == "u" && (arreglo[i+1] == "f") && (arreglo[i+2] == "a") && (arreglo[i+3] == "t")){
            semiLista.push("u");
            i = i+3;
        }else{
            semiLista.push(arreglo[i]);
        }
    }
    return semiLista;
}

function encriptar() {
    let entrada = [];
    let texto;
    let salida;

    //Se transforma la entrada en lista y se convierten las letras a minúsculas
    entrada = prepararEntrada();
    //Se encripta
    texto = prepararEncriptar(entrada);
    //Se vuelve String el resultado para imprimirlo
    salida = texto.join("");
    //Se habilita el cuadro que va a imprimir el resultado
    mostrarCuadroResultado();
    //Se imprime el resultado
    imprimirResultado('texto-encriptado', salida);
}

function desencriptar() {
    let entrada = [];
    let texto;
    let salida;

    //Se transforma la entrada en lista y se convierten las letras a minúsculas
    entrada = prepararEntrada();
    //Se desencripta
    texto = prepararDesencriptar(entrada);
    //Se vuelve String el resultado para imprimirlo
    salida = texto.join("");
    //Se habilita el cuadro que va a imprimir el resultado
    mostrarCuadroResultado();
    //Se imprime el resultado
    imprimirResultado('texto-encriptado', salida);
}

// -----------------------------------------------------------------------------------------------------------------

