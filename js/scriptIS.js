function loging(){
	
var usuario=document.getElementById("user").value;
var contraseña=document.getElementById("cont").value;

	if(usuario<=9999 && contraseña=="pol"){
		 window.location.href= 'inicio.html';
	}else{
		alert("Usuario o contrasela erronea")
	}
}

	
