function generarColorAleatorio(){
    var letras = '0123456789ABCDEF';
    var color = '#';
    var i = 0;
    for (i = 0; i<6;i++){
        color += letras[Math.floor(Math.random()*16)];
    }
    return color;
}

function agregarPostits(){

    var nuevoElemento = document.createElement("li");
    var entradaTexto = document.getElementById("agregarNota").value;
    nuevoElemento.innerHTML = entradaTexto;
    //para que se vean colores aleatorios
    var colorAleatorio = generarColorAleatorio();
    nuevoElemento.style.backgroundColor = colorAleatorio;

    var lista = document.getElementById("listaNotas");
    lista.appendChild(nuevoElemento);
    entradaTexto.innerHTML = " ";
    document.getElementById("agregarNota").value = '';
}

