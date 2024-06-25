
function verdni(){
	var dato=document.getElementById("dni").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("dni").value= "";
		document.getElementById("dni").focus();
		alert('El DNI no pueden ser espacios en blancos');
	}	
}
function vernom(){
	var dato=document.getElementById("nombre").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("nombre").value= "";
		document.getElementById("nombre").focus();
		alert('El nombre no pueden ser espacios en blancos');
	}	
}
function verape(){
	var dato=document.getElementById("apellido").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("apellido").value= "";
		document.getElementById("apellido").focus();
		alert('El apellido no puede ser espacios en blanco');
	}	
}
function vertel(){
	var dato=document.getElementById("telefono").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("telefono").value= "";
		document.getElementById("telefono").focus();
		alert('El telefono no pueden ser espacios en blanco');
	}	
}
function verdir(){
	var dato=document.getElementById("direccion").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("direccion").value= "";
		document.getElementById("direccion").focus();
		alert('La direccion no puede ser espacio en blanco');
	}	
}
function veruse(){
	var dato=document.getElementById("user").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("user").value= "";
		document.getElementById("user").focus();
		alert('El Nombre de Usuario no puede ser espacios en blanco');
	}	
}
function vercont(){
	var dato=document.getElementById("cont").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("cont").value= "";
		document.getElementById("cont").focus();
		alert('La contrasela no pueden ser espacios en blancos');
	}	
}

function vermail(){
	var dato=document.getElementById("mail").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("mail").value= "";
		document.getElementById("mail").focus();
		alert('El correo no puede ser espacios en blanco');
	}	
}
function verobs(){
	var dato=document.getElementById("obs").value;
	
	dato=dato.trim();
	if (dato == ""){
		document.getElementById("obs").value= "";
		document.getElementById("obs").focus();
		alert('Las observaciones no pueden ser espacios en blanco');
	}	
}