

/* aqui cree la funcion para que el boton de Donate se desapareciera
con el evento ONCLICK*/ 

console.log("Conectado")
var btnDonate = document.getElementById("btnDonate");
btnDonate.addEventListener("click", function() {
    btnDonate.remove();
});
/*==================================================================*/ 



/*AQUI ESTÁ LA FUNCIÓN PARA QUE SE MUESTRE UNA ALERTA
CADA VEZ QUE SE CAMBIA EL SELECTOR <select>*/

var selector = document.getElementById("selector")

    selector.addEventListener('change', function() {
    var cambioselector= selector.value;
    alert('You are looking for a: ' + cambioselector);
    });
/*=====================================================================*/


/*AQUI ESTAN LAS FUNCIONES PARA CADA BOTON DE PETTINGS
PARA ASI INCREMENTAR EL NUMERO DE LA ETIQUETA QUE DESIGNE EN EL HTML <span>
EN ESTE CASO UTILICE EL EVENTO ONCLICK POR SEPARADO, UTILIZANDO getElementById
CREANDO VARIABLES INDEPENDIENTES PARA QUE FUNCIONARA CORRECTAMENTE*/


/*FUNCION PETTING PEPPER*/
var contador1=0
var btnpettings1= document.getElementById("btnpettings1")
var pettings1= document.getElementById("pettings1")
btnpettings1.addEventListener("click",function(){
    contador1++;
    pettings1.innerText=contador1;
})

/*  FUNCION  PETTING DE BRUCE*/
var contador2=0
var btnpettings2= document.getElementById("btnpettings2")
var pettings2= document.getElementById("pettings2")
btnpettings2.addEventListener("click",function(){
    contador2++;
    pettings2.innerText=contador2;
})

/*FUUNCION PETTING DE OSCAR*/

var contador3=0
var btnpettings3= document.getElementById("btnpettings3")
var pettings3= document.getElementById("pettings3")
btnpettings3.addEventListener("click",function(){
    contador3++;
    pettings3.innerText=contador3;
})