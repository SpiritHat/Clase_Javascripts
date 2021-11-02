function alerta(){
    alert('Bienvenido');
}

function imprPantalla(){
    document.write('Bienvenido');
}

function suma(){
    let n1=prompt('Digite un numero');
    let n2=prompt('Digite un numero');
    n1=parseInt(n1);
    n2=parseInt(n2);
    let result=parseInt(n1+n2);
    document.write(result);
}

function numeros(){
    for (let i = 0; i < 10; i++) {
        document.write(i+" es menor que 10 <br>");
        
    }
}

function numerosW(){
    let i=0;
    while (i<10) {
        document.write(i+" es menor que 10 <br>");
        i++;
    }
}

function tablaM(){
    let num2=1;
    let num1=prompt('Digite un numero');
    while (num2<=20) {
        document.write(`${num1} * ${num2} = ${num1 * num2}<br>`);
        num2++;
    }
}