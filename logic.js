function actualizarLiga() {
    const liga = document.getElementById('liga-selector').value;
    const container = document.getElementById('contenedor-partidos');
    container.innerHTML = "";
    
    LIGAS_MUNDIALES[liga].forEach(p => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="team-col"><img src="${p.imgL}">${p.local}</div>
            <div class="score-inputs"><input type="number"> - <input type="number"></div>
            <div class="team-col"><img src="${p.imgV}">${p.visita}</div>
        `;
        container.appendChild(card);
    });
}

async function procesarPago() {
    const nombre = prompt("¿A nombre de quién registramos la quiniela?");
    if(!nombre) return;

    // 1. Registro automático en Google Sheets (Base de Datos)
    // El cliente debe poner su URL de Sheet.best aquí
    const data = { nombre: nombre, fecha: new Date().toLocaleDateString(), estatus: "PAGADO" };
    
    await fetch('TU_URL_DE_SHEET_BEST_AQUI', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    // 2. Redirección al banco (Stripe)
    window.location.href = "TU_LINK_DE_PAGO_STRIPE_AQUI";
}

document.addEventListener('DOMContentLoaded', actualizarLiga);
