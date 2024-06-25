function otros(){
	const div1=document.getElementById("pos")
	const bot=document.getElementById("form")
	var opcion=document.getElementById("tip_residencia").value;
	
	if(opcion=="otro"){
		const boton=document.getElementById("carga");
		boton.remove();
		
		const etiqueta=document.createElement("label");
		etiqueta.setAttribute("for","explique");
		etiqueta.setAttribute("id","labelexplique");
		etiqueta.innerHTML="Especifique: ";
		div1.appendChild(etiqueta);
		
		const input=document.createElement("input");
		input.setAttribute("type","text");
		input.setAttribute("id","espl");
		div1.appendChild(input);
		
		bot.appendChild(boton);
	}
	else{
		const etiqueta=document.getElementById("labelexplique");
		etiqueta.remove();
		const input=document.getElementById("espl")
		input.remove();
	
	}
}