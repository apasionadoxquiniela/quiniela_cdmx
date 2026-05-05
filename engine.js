// Simulador de Momios
document.getElementById('apuesta').addEventListener('input', (e) => {
    const monto = e.target.value;
    const momio = 1.85; // Esto vendrá de la API
    document.getElementById('ganancia').innerText = `$${(monto * momio).toFixed(2)}`;
});

// Función para cargar partidos con imágenes de equipos (Simulación de API)
function cargarPartidos(liga) {
    const contenedor = document.getElementById('partidos-dinamicos');
    contenedor.innerHTML = ""; // Limpiamos

    // Esta es la estructura que permite tener cualquier equipo del mundo
    const partidos = obtenerDatosLiga(liga); 

    partidos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="team">
                <img src="${p.imgLocal}" alt="${p.local}">
                <span>${p.local}</span>
                <small>Momio: ${p.momioL}</small>
            </div>
            <div class="vs-inputs">
                <input type="number" placeholder="0"> - <input type="number" placeholder="0">
            </div>
            <div class="team">
                <img src="${p.imgVisita}" alt="${p.visita}">
                <span>${p.visita}</span>
                <small>Momio: ${p.momioV}</small>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
