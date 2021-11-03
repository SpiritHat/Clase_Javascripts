//metodo 1
/* var caja=document.querySelector("#caja");
caja.addEventListener("click",cambiarColor);

function cambiarColor(){
    if (caja.value=="aqua") {
        caja.style.background="royalblue";
        caja.value="royalblue"
    }else{
        caja.style.background="aqua";
        caja.value="aqua"
    }
} */

//metodo 2
/* $("#caja").click(function(){
    if (caja.value=="aqua") {
        $("#caja").css({"background":"lime"});
        $(this).val("royalblue");
    }else{
        $("#caja").css({"background":"yellow"});
        $(this).val("aqua");
    }
}) */

//metodo 3
$(document).ready(function() {
    $(".rojo").click(function() {
        $('body').css('background-color','red');
        $('.rojo').css('background-color','black');
        $('.text-center').css('color','white');
    });
    $(".azul").on('click',function () {
        $('body').css('background-color','blue');
        $('.azul').css('background-color','black');
        $('.text-center').css('color','white');
    });
    $(".amarillo").on('click',function () {
        $('body').css('background-color','yellow');
        $('.azul').css('background-color','black');
        $('.text-center').css('color','white');
    });
    $(".verde").on('click',function () {
        $('body').css('background-color','green');
        $('.azul').css('background-color','black');
        $('.text-center').css('color','white');
    });
})