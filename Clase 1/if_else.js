function mayor() {
    let e=prompt('Digite su edad');
    e=parseInt(e);
    if (e>=18) {
        document.write('Es mayor de edad');
    } else {
        document.write('No es mayor de edad');
    }
}

function compra() {
    let a=parseInt(prompt('Digite el precio del producto'));
    let b=parseInt(prompt('Digite el pago del cliente'));
    if (a<=b) {
        let cambio=parseInt(b-a);
        document.write('Producto combrado exitosamente <br> El cambio del cliente es: '+cambio);
    } else {
        document.write('El cliente no tiene suficiente dinero para comprar el producto');
    }
}