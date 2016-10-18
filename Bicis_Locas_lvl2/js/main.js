function validateForm(){
	/* Escribe tú código aquí */
	/* Escribe tú código aquí */
	//variables para validar los campos
	var elNombre = document.getElementById("name").value;
	var elApellido = document.getElementById("lastname").value;
	var elCorreo = document.getElementById("input-email").value;
	var elContrasenia = document.getElementById("input-password").value;
	var elOpciones = document.getElementById("select-opciones").selectedIndex;
	//Campo Nombre
	/*Uso de Expresion regular (niego mi expresion regular) para nombres propios, donde acepta todas las mayusculas de A a Z
	  ademas de las vocales acentuadas y en mayuscula, de esta condicion solo acepta una que es la
	  inicial del nombre, posteriormente acepta las letras minusculas de la a a z la ñ y las vocales
	  acentuadas, si hay dos nombre acepta espacio*/
	if( !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(elNombre)) ) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa tu Nombre";
		var elFormuNombre = document.getElementById("formNombre");
		elFormuNombre.appendChild(span);
  	}
  	//Campo Apellido
  	//Misma explicacion de la expresion regular para nombre
	if( !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(elApellido)) ) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa tu Apellido";
		var elFormuApellido = document.getElementById("formApellido");
		elFormuApellido.appendChild(span);
  	}
  	//Campo Email
  	/*Uso de expresion regular para validar el correo, primero valida que el correo sean letras minusculas, numeros
  		guion medio y guion bajo, posteriormente va el simbolo de arroba que solo es uno y despues lentras minusculas, numeros
  		 y el punto, despues de nuevo las minusculas.*/
	if( !(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(elCorreo)) ) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa tu Correo";
		var elFormuCorreo = document.getElementById("formCorreo");
		elFormuCorreo.appendChild(span);
  	}
	//Campo contraseña
	/*Solo valide conforme a las condifiones que se nos dio*/
	if( elContrasenia == null || elContrasenia.length < 6 || elContrasenia == "123456" || elContrasenia == "098754" || elContrasenia == "password") {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa tu Contraseña";
		var elFormuContrasena = document.getElementById("formContrasena");
		elFormuContrasena.appendChild(span);
  	}
	//Campo opciones
	/*Para este selector de opciones solo hay que cuidar que no quede en null o la opcion sea cero, ya que la opcion cero
	 por lo regular es la instruccion de seleccionar*/
	if( elOpciones == null || elOpciones == 0 ) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa tu bici";
		var elFormuSelect = document.getElementById("formSelec");
		elFormuSelect.appendChild(span);
  	}
}