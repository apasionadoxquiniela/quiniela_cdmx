let pronosticosUsuario = {};

function cargarJornada() {
    const liga = document.getElementById('selector-liga').value;
    const container = document.getElementById('jornada-container');
    container.innerHTML = "";
    pronosticosUsuario = {}; // Reiniciar pronósticos al cambiar de liga

    DB_PARTIDOS[liga].forEach(p => {
        const div = document.createElement('div');
        div.className = 'match-card';
        div.innerHTML = `
            <div class="match-teams">
                <div class="team"><img src="${p.imgL}"><div>${p.local}</div></div>
                <div style="font-weight:bold; color:#666;">VS</div>
                <div class="team"><img src="${p.imgV}"><div>${p.visita}</div></div>
            </div>
            <div class="lev-options">
                <button class="btn-lev" onclick="marcarResultado(this, '${p.id}', 'L')">L</button>
                <button class="btn-lev" onclick="marcarResultado(this, '${p.id}', 'E')">E</button>
                <button class="btn-lev" onclick="marcarResultado(this, '${p.id}', 'V')">V</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function marcarResultado(elemento, partidoId, resultado) {
    // Desmarcar otros botones del mismo partido
    const botones = elemento.parentElement.querySelectorAll('.btn-lev');
    botones.forEach(btn => btn.classList.remove('active'));
    
    // Marcar el seleccionado
    elemento.classList.add('active');
    pronosticosUsuario[partidoId] = resultado;
    console.log("Pronósticos actuales:", pronosticosUsuario);
}

// Simulador de ganancias
document.getElementById('monto-apuesta').addEventListener('input', (e) => {
    const ganancia = (e.target.value * 2.25).toFixed(2);
    document.getElementById('val-ganancia').innerText = "Ganas: $" + ganancia;
});

function iniciarProcesoPago() {
    const totalPartidos = document.querySelectorAll('.match-card').length;
    const pronosticados = Object.keys(pronosticosUsuario).length;

    if (pronosticados < totalPartidos) {
        alert("Por favor, selecciona un resultado (L, E o V) para todos los partidos.");
        return;
    }

    const nombre = prompt("Nombre completo para tu registro:");
    if (!nombre) return;

    alert("¡Perfecto " + nombre + "! Redirigiendo a la pasarela de pago segura.");
    window.location.href = "TU_LINK_DE_PAGO_AQUI";
}

document.addEventListener('DOMContentLoaded', cargarJornada);
