function mostrar(input) {
    var A1=document.getElementById("A1");
    if (input.value=="Ocultar formulario") {
        A1.style.visibility="hidden";
        input.value="Mostrar formulario";
    } else {
        A1.style.visibility="visible";
        input.value="Ocultar formulario";
    }
}

function capturarTexto() {
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var mensaje=document.getElementById("mensaje").value;
    document.getElementById("respuesta").innerHTML=`Nombre: ${nombre} <br> Apellido: ${apellido} <br> Mensaje: ${mensaje}<br>`;
}

function suma(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var result=n1+n2;
    document.getElementById("resultadoS").innerHTML=`${n1} + ${n2} = ${result}`;
}

function resta(){
    var b1=parseInt(document.getElementById("b1").value);
    var b2=parseInt(document.getElementById("b2").value);
    var result=b1-b2;
    document.getElementById("resultadoR").innerHTML=`${b1} - ${b2} = ${result}`;
}

function multi(){
    var c1=parseInt(document.getElementById("c1").value);
    var c2=parseInt(document.getElementById("c2").value);
    var result=c1*c2;
    document.getElementById("resultadoM").innerHTML=`${c1} x ${c2} = ${result}`;
}

function divi(){
    var d1=parseInt(document.getElementById("d1").value);
    var d2=parseInt(document.getElementById("d2").value);
    var result=d1/d2;
    document.getElementById("resultadoD").innerHTML=`${d1} / ${d2} = ${result}`;
}
