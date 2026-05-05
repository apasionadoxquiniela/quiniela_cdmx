function cargarPartidos() {
    const container = document.getElementById('partidos-container');
    JORNADA_CONFIG.forEach(p => {
        const div = document.createElement('div');
        div.className = 'partido-card';
        div.innerHTML = `<span>${p.local}</span> <input type="number"> vs <input type="number"> <span>${p.visitante}</span>`;
        container.appendChild(div);
    });
}
function enviarPronosticos() { alert("¡Pronósticos enviados con éxito!"); }
document.addEventListener('DOMContentLoaded', cargarPartidos);
