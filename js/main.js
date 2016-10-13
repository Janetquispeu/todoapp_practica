var textArea=document.getElementById("textArea");

window.addEventListener("load",validarTextArea);

function validarTextArea (e) {
	textArea.addEventListener("keydown",imprimirConTeclaEnter)
}
function imprimirConTeclaEnter(e){
	if(e.keyCode==13 && textArea.value.trim().length!=0){
		imprimirMensaje();
	}
}

function imprimirMensaje (){
	var divListaTareas=document.getElementById("listaTareas")
	var divContenedor=document.createElement("div");
	var divCheckbox=document.createElement("input");
	var divMensaje=document.createElement("div");
	var spanIcono=document.createElement("span");

	divListaTareas.appendChild(divContenedor);
	divContenedor.appendChild(divCheckbox);
	divContenedor.appendChild(divMensaje);
	divContenedor.appendChild(spanIcono);

	divContenedor.classList.add("contenedor");
	divMensaje.classList.add("mensaje");
	spanIcono.classList.add("glyphicon","glyphicon-trash", "icono-trush");
	divCheckbox.setAttribute("type","checkbox");
	
	divMensaje.textContent=textArea.value;
	textArea.value="";

	divCheckbox.addEventListener("click",subrayarTexto);
	spanIcono.addEventListener("click",eliminarTarea);
}

function subrayarTexto(){
	this.nextSibling.classList.toggle("subrayarTexto");
}
function eliminarTarea(){
	this.parentElement.remove();
}
