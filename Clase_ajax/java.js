function mostrar() {
    $.ajax({
        type: "POST",
        url: "datos.php",
        success:function(d){
            $("#tabla").html(d)
        }
    });
}

function guardar() {
    var datos={
        "nombre":$("#nombre").val(),
        "edad":$("#edad").val()
    }
    $.ajax({
        type:"POST",
        url:"guardar.php",
        data:datos,
        success:function(d){
            Swal.fire(
                'Muy bien',
                'Se ha guardado tu registro',
                'Continuar'
            );
            mostrar();
        }

    });
}