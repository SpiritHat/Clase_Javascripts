function suma(){
    let n1=prompt('Digite un numero');
    let n2=prompt('Digite un numero');
    n1=parseInt(n1);
    n2=parseInt(n2);
    let result=parseInt(n1+n2);
    document.write(`${n1} + ${n2} = ${result}`);
}

function resta(){
    let n1=prompt('Digite un numero');
    let n2=prompt('Digite un numero');
    n1=parseInt(n1);
    n2=parseInt(n2);
    let result=parseInt(n1-n2);
    document.write(`${n1} - ${n2} = ${result}`);
}

function multiplica(){
    let n1=prompt('Digite un numero');
    let n2=prompt('Digite un numero');
    n1=parseInt(n1);
    n2=parseInt(n2);
    let result=parseInt(n1*n2);
    document.write(`${n1} x ${n2} = ${result}`);
}

function division(){
    let n1=prompt('Digite un numero');
    let n2=prompt('Digite un numero');
    n1=parseInt(n1);
    n2=parseInt(n2);
    let result=parseInt(n1/n2);
    document.write(`${n1} / ${n2} = ${result}`);
}