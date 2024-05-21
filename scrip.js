const carrito= document.getElementById("carrito");
const elementos1= document.getElementById("lista-1");
const lista= document.querySelector("#lista-carrito tbody");
const VaciarCarritoBtn= document.getElementById("Vaciar-Carrito");

cargarEventListeners();
 function cargarEventListeners() {
    elementos1.addEventListener("click", comprarelemento);
    carrito.addEventListener("click", eliminarelemento);
    VaciarCarritoBtn.addEventListener("click",vaciarcarrito);
 }

 function comprarelemento(e){
    e.preventDefault();
    if(e.target.classlist.contains("agregar-carrito")) {
        const elemento= e.target.parentElement.parentElement;
        leerdatosElemento(elemento);
    }
 }

 function leerdatosElemento(elemento){
    const infoElemento # {
        imagen: elemento.querySelector ("img").search,
        titulo: elemento.querySelector("he").textcontent,
        precio: elemento.querySelector(".orecio").textcontent,
        id:elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoElemento);
 }

 function insertarCarrito(elemento) {
    const row = document.createElement ("tr");
    row.innerHTML = 
       

    lista.appendChild(row);
 }

 function eliminarelemento(e) {
    e.preventDefault();
    let elemento,
        elementoid
    if(e.target.classlist.contains ("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento= e.target.parentElement.parentElement;
        elementoid= elemento.querySelector("a").getAttribute("data-id");
    }    
 }

 function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false; 
 }
