let selecciones = {};

function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const tipo = document.getElementById('selector-tipo').value;
    const container = document.getElementById('jornada-container');
    container.innerHTML = "";
    selecciones = {}; 

    const partidos = DB_PARTIDOS[liga][tipo];

    partidos.forEach(p => {
        const imgL = LOGOS_EQUIPOS[p.local] || "logo_principal.png";
        const imgV = LOGOS_EQUIPOS[p.visita] || "logo_principal.png";
        const esComodin = p.id === "RES";
        
        const div = document.createElement('div');
        div.className = esComodin ? 'match-card comodin' : 'match-card';
        div.innerHTML = `
            ${esComodin ? '<div class="tag-comodin">PARTIDO COMODÍN (RESERVA)</div>' : ''}
            <div class="match-teams">
                <div class="team"><img src="${imgL}"><div>${p.local}</div></div>
                <div class="vs-badge">VS</div>
                <div class="team"><img src="${imgV}"><div>${p.visita}</div></div>
            </div>
            <div class="lev-options">
                <button class="btn-lev" onclick="marcar(this,'${p.id}','L')">L</button>
                <button class="btn-lev" onclick="marcar(this,'${p.id}','E')">E</button>
                <button class="btn-lev" onclick="marcar(this,'${p.id}','V')">V</button>
            </div>`;
        container.appendChild(div);
    });
}

function marcar(btn, id, res) {
    btn.parentElement.querySelectorAll('.btn-lev').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selecciones[id] = res;
}

function iniciarProcesoPago() {
    const total = document.querySelectorAll('.match-card').length;
    if (Object.keys(selecciones).length < total) {
        alert("Atención: Por favor completa todos los pronósticos.");
        return;
    }
    const nombre = prompt("Ingresa tu nombre completo para el registro:");
    if(nombre) mostrarModalPago(nombre);
}

function mostrarModalPago(nombre) {
    const modal = document.createElement('div');
    modal.className = 'pago-modal-overlay';
    const mensajeWA = encodeURIComponent(`Hola, soy ${nombre}. Adjunto comprobante de mi quiniela.`);
    const linkWA = `https://wa.me/525555555555?text=${mensajeWA}`;

    modal.innerHTML = `
        <div class="pago-modal-content">
            <h3>PAGO SEGURO</h3>
            <p>Escanea el QR con tu App Bancaria:</p>
            <img src="codigo_qr_banorte.png" class="qr-img">
            <a href="${linkWA}" target="_blank" class="btn-whatsapp">ENVIAR COMPROBANTE</a>
            <button onclick="this.parentElement.parentElement.remove()" style="margin-top:15px; border:none; background:none; cursor:pointer; color:#666;">Cerrar</button>
        </div>`;
    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', cargarJornada);
