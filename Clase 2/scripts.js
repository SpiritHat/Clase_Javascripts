const input=document.querySelector(".prueba1");
document.write(input.value);

const input2=document.querySelector(".prueba2");
input2.placeholder="Hola";

const input3=document.querySelector(".prueba3");
input3.minLength=4;

const input4=document.querySelector(".prueba4");
input4.required="true";

function capturarTexto() {
    var nombre=document.getElementById("nombre").value;
    var mensaje=document.getElementById("mensaje").value;
    document.getElementById("respuesta").innerHTML=`${nombre} = ${mensaje}<br>Ha sido enviado`;
}

function mostrar(input) {
    var img=document.getElementById("img");
    if (input.value=="ocultar") {
        img.style.visibility="hidden";
        input.value="mostrar";
    } else {
        img.style.visibility="visible";
        input.value="ocultar";
    }
}