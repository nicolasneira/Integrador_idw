function actualizarReloj(){
	var objetoHora = new Date();
	var hora=padZero(objetoHora.getHours());
	var minutos=padZero(objetoHora.getMinutes());
	var segundos=padZero(objetoHora.getSeconds());
	var fechaSting =objetoHora.getDate();
	
	var options={weekday:'long', year:'numeric', month:'long', day:'numeric'}
	
	var fechaSting= new Date().toLocaleDateString('es-ES', options);
	
	
	var tiempoString = hora + ":" + minutos + ":" + segundos;
	document.getElementById("time").textContent=tiempoString;
	
	document.getElementById("fecha").textContent=fechaSting;
	
	setTimeout(actualizarReloj, 1000);
}
function padZero(numero){
	return numero<10? "0" +numero: numero;
}
actualizarReloj();