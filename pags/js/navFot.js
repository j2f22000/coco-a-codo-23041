// Con esta función obtenemos el valor de descuento.
function seleccionarCategoria() {
    const categoria = document.getElementById("categoria")
    const select = parseFloat(categoria.value) 
    return select
    
}
//con esta función obtenemos el precio final con descuento 
function precioTotal() {
    
    const cantidad=parseFloat(document.getElementById("cantidad").value); 
    const precio = parseFloat(document.getElementById("precio").textContent);
    
    const descuento= seleccionarCategoria();
   
    const totalDescuento=cantidad * precio-((cantidad * precio)*descuento)
    document.getElementById("total").innerHTML=totalDescuento;
    
}
//función para borrar
function borrarElementos() {
    document.getElementById("total").innerHTML="";
}
// botones de resumen   
const resumen= document.getElementById("resumen")
resumen.addEventListener("click",precioTotal)
// botones para borrar datos 
const borrar = document.getElementById("borrar")
borrar.addEventListener("click",borrarElementos)
   
   
    
   
    
    





