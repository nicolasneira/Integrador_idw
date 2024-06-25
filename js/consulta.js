function busqueda() {
    const resp = document.getElementById("pos");
    var y = document.getElementById("dni").value;

    // Eliminar cualquier contenido previo en resp
    resp.innerHTML = '';

    if (y === '42633309') {
        const texto = document.createElement("h3");
        texto.textContent = "Su prueba de factibilidad fue EXITOSA";
        applyStyles(texto, 'blue');
        resp.appendChild(texto);
    } else if (y === '16384410') {
        const texto = document.createElement("h3");
        texto.textContent = "Su prueba de factibilidad Falló";
        applyStyles(texto, 'red');
        resp.appendChild(texto);
    } else if (y === '41468191') {
        const texto = document.createElement("h3");
        texto.textContent = "Su prueba de factibilidad se realizará en los próximos días";
        applyStyles(texto, 'green');
        resp.appendChild(texto);
    } else {
        const texto = document.createElement("h3");
        texto.textContent = "No se encontró ninguna solicitud para este número de DNI.";
        applyStyles(texto, 'red');
        resp.appendChild(texto);
    }
}

function applyStyles(element, color) {
    element.style.fontSize = '24px';
    element.style.color = color;
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.border = '2px solid  #1A106D'; 
    element.style.padding = '10px'; 
    element.style.textAlign = 'center'; 
}