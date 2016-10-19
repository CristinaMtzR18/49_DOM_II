function validateForm(){
	/* Escribe tú código aquí */
	//variables para validar los campos
	var elNombre = document.getElementById("name").value;
	var elApellido = document.getElementById("lastname").value;
	var elCorreo = document.getElementById("input-email").value;
	var elContrasena = document.getElementById("input-password").value;
	var elOpciones = document.getElementById("select-opciones").selectedIndex;
	//Borrar span
	var spans = document.getElementsByClassName("error");
	while(spans.length>0){
		spans[0].parentNode.removeChild(spans[0]);
	}
	//Campo Nombre
	var elFormuNombre = document.getElementById("formNombre");
	var spanNombre = document.createElement("span");
	spanNombre.setAttribute("class","error");
	if(elNombre == null || elNombre.length == 0 || /^\s+$/.test(elNombre)){
		spanNombre.innerHTML = "Ingresa tu Nombre";
		elFormuNombre.appendChild(spanNombre);
		}else if(/^[0-9]$/.test(elNombre)){
			spanNombre.innerHTML = "No agregue números";
			elFormuNombre.appendChild(spanNombre);
			}else if(/^[a-z]$/.test(elNombre[0])){
				spanNombre.innerHTML = "La primera letra debe ser mayúscula";
				elFormuNombre.appendChild(spanNombre);
			}
	//Campo Apellido
	var spanApellido = document.createElement("span");
	spanApellido.setAttribute("class","error");
	var elFormuApellido = document.getElementById("formApellido");
	if(elApellido == null || elApellido.length == 0 || /^\s+$/.test(elApellido)){
		spanApellido.innerHTML = "Ingresa tu Apellido";
		elFormuApellido.appendChild(spanApellido);
		}else if(/^[0-9]$/.test(elApellido)){
			spanApellido.innerHTML = "No agregue números";
			elFormuApellido.appendChild(spanApellido);
			}else if(/^[a-z]$/.test(elApellido[0])){
				spanApellido.innerHTML = "La primera letra debe ser mayúscula";
				elFormuApellido.appendChild(spanApellido);
			}
	//Campo Email
	if( !(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(elCorreo)) ) {
		var spanCorreo = document.createElement("span");
		spanCorreo.setAttribute("class","error");
		spanCorreo.innerHTML = "Ingresa un correo valido. Ej: name@domain.com";
		var elFormuCorreo = document.getElementById("formCorreo");
		elFormuCorreo.appendChild(spanCorreo);
	}
	//Campo Contraseña
	var elFormuContrasena = document.getElementById("formContrasena");
	var spanContrasena = document.createElement("span");
	spanContrasena.setAttribute("class","error");
	if( elContrasena== null || elContrasena.length < 6) {
		spanContrasena.innerHTML = "Ingresa una contraseña mayor a 6 caracteres";
		elFormuContrasena.appendChild(spanContrasena);
		console.log(spanContrasena.parentNode);
		}else if(elContrasena == "123456" || elContrasena == "098754"){
			spanContrasena.innerHTML = "Ingresa una contraseña diferente a 123456 o 098754";
			elFormuContrasena.appendChild(spanContrasena);
			}else if (elContrasena == "password"){
				spanContrasena.innerHTML = "Ingresa una contraseña diferente a password";
				elFormuContrasena.appendChild(spanContrasena);
	}
	//Campo opciones
	if( elOpciones == null || elOpciones == 0 ) {
		var spanOpciones = document.createElement("span");
		spanOpciones.setAttribute("class","error");
		spanOpciones.innerHTML = "Selecciona una opcion";
		var elFormuSelect = document.getElementById("formSelec");
		elFormuSelect.appendChild(spanOpciones);
	}
}