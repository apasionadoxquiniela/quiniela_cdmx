let selecciones = {};

function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const tipo = document.getElementById('selector-tipo').value;
    const container = document.getElementById('jornada-container');
    
    container.innerHTML = "";
    selecciones = {}; 

    const partidos = DB_PARTIDOS[liga][tipo];

    partidos.forEach(p => {
        const esComodin = p.id === "RES";
        const div = document.createElement('div');
        div.className = esComodin ? 'match-card comodin' : 'match-card';
        
        div.innerHTML = `
            ${esComodin ? '<div class="tag-comodin">PARTIDO COMODIN (RESURSO)</div>' : ''}
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

function marcar(btn, id, res) {
    const fila = btn.parentElement.querySelectorAll('.btn-lev');
    fila.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selecciones[id] = res;
}

function iniciarProcesoPago() {
    const totalEnPantalla = document.querySelectorAll('.match-card').length;
    if (Object.keys(selecciones).length < totalEnPantalla) {
        alert("Atencion: Debes seleccionar un resultado para los 9 partidos y el comodin.");
        return;
    }
    const nombre = prompt("Nombre completo para el registro:");
    if(!nombre) return;
    
    window.location.href = "TU_LINK_DE_PAGO_AQUI";
}

document.addEventListener('DOMContentLoaded', cargarJornada);
