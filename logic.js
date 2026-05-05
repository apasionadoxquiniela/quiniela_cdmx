let pronosticosUsuario = {};

function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const tipo = document.getElementById('selector-tipo').value;
    const container = document.getElementById('jornada-container');
    
    container.innerHTML = "";
    pronosticosUsuario = {}; 

    const partidosSeleccionados = DB_PARTIDOS[liga][tipo];

    partidosSeleccionados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'match-card';
        div.innerHTML = `
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
        container.appendChild(div);
    });
}

function marcar(elemento, partidoId, resultado) {
    const botones = elemento.parentElement.querySelectorAll('.btn-lev');
    botones.forEach(btn => btn.classList.remove('active'));
    elemento.classList.add('active');
    pronosticosUsuario[partidoId] = resultado;
}

function iniciarProcesoPago() {
    const total = document.querySelectorAll('.match-card').length;
    if (Object.keys(pronosticosUsuario).length < total) {
        alert("Completa todos los pronósticos antes de continuar.");
        return;
    }
    window.location.href = "TU_LINK_DE_PAGO_AQUI";
}

document.addEventListener('DOMContentLoaded', cargarJornada);
