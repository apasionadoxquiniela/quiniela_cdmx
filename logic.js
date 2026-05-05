let pronosticos = {};

function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const tipo = document.getElementById('selector-tipo').value;
    const container = document.getElementById('jornada-container');
    
    container.innerHTML = "";
    pronosticos = {}; 

    const partidos = DB_PARTIDOS[liga][tipo];

    partidos.forEach(p => {
        const esReserva = p.id === "RES";
        const card = document.createElement('div');
        card.className = esReserva ? 'match-card reserva' : 'match-card';
        
        card.innerHTML = `
            ${esReserva ? '<div class="reserva-tag">PARTIDO DE RESPALDO (RESERVA)</div>' : ''}
            <div class="match-teams">
                <div class="team"><img src="${p.imgL}"><div>${p.local}</div></div>
                <div class="vs-badge">VS</div>
                <div class="team"><img src="${p.imgV}"><div>${p.visita}</div></div>
            </div>
            <div class="lev-options">
                <button class="btn-lev" onclick="marcar(this, '${p.id}', 'L')">L</button>
                <button class="btn-lev" onclick="marcar(this, '${p.id}', 'E')">E</button>
                <button class="btn-lev" onclick="marcar(this, '${p.id}', 'V')">V</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function marcar(btn, id, res) {
    const fila = btn.parentElement.querySelectorAll('.btn-lev');
    fila.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pronosticos[id] = res;
}

function iniciarProcesoPago() {
    const total = document.querySelectorAll('.match-card').length;
    if (Object.keys(pronosticos).length < total) {
        alert("Atención: Debes completar los 9 partidos y el de reserva.");
        return;
    }
    window.location.href = "TU_LINK_DE_PAGO_STRIPE";
}

document.addEventListener('DOMContentLoaded', cargarJornada);
