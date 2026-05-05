// Carga los partidos segun la liga seleccionada
function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const container = document.getElementById('jornada-container');
    container.innerHTML = "";

    DB_PARTIDOS[liga].forEach(p => {
        const div = document.createElement('div');
        div.className = 'match-box';
        div.innerHTML = `
            <div class="team">
                <img src="${p.imgL}">
                <div>${p.local}</div>
            </div>
            <div class="score-inputs">
                <input type="number" id="L-${p.id}" placeholder="0">
                <span>-</span>
                <input type="number" id="V-${p.id}" placeholder="0">
            </div>
            <div class="team">
                <img src="${p.imgV}">
                <div>${p.visita}</div>
            </div>
        `;
        container.appendChild(div);
    });
}

// Simulador de ganancias en tiempo real
document.getElementById('monto-apuesta').addEventListener('input', (e) => {
    const monto = e.target.value;
    const momio = 1.95; // Puedes ajustar este valor
    const ganancia = (monto * momio).toFixed(2);
    document.getElementById('val-ganancia').innerText = "Ganas: $" + ganancia;
});

// Proceso de registro y redireccion a pago
function iniciarProcesoPago() {
    const nombre = prompt("Ingresa tu nombre completo para el registro:");
    if (!nombre) return;

    // Aqui se podria agregar la logica para enviar datos a un Excel (Google Sheets)
    alert("¡Hola " + nombre + "! Tus pronosticos han sido capturados. Seras redirigido al pago seguro.");
    
    // REEMPLAZAR ESTE LINK POR TU LINK DE PAGO DE STRIPE O MERCADO PAGO
    window.location.href = "TU_LINK_DE_PAGO_AQUI";
}

// Inicia el sistema al cargar la pagina
document.addEventListener('DOMContentLoaded', cargarJornada);
