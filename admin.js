/* 
   GUIA PARA EL CLIENTE:
   Aqui gestionas las ligas y sus partidos. 
   Cada liga en media_semana tiene 9 partidos + 1 Comodin (ID: "RES").
*/
const DB_PARTIDOS = {
    liga_mx: {
        media_semana: [
            { id: "M1", local: "América", visita: "Pachuca", imgL: "https://media.api-sports.io/football/teams/2287.png", imgV: "https://media.api-sports.io/football/teams/2283.png" },
            { id: "M2", local: "Tigres", visita: "Juárez", imgL: "https://media.api-sports.io/football/teams/2282.png", imgV: "https://media.api-sports.io/football/teams/2290.png" },
            { id: "M3", local: "Cruz Azul", visita: "Atlas", imgL: "https://media.api-sports.io/football/teams/2289.png", imgV: "https://media.api-sports.io/football/teams/2285.png" },
            { id: "M4", local: "Monterrey", visita: "Santos", imgL: "https://media.api-sports.io/football/teams/2281.png", imgV: "https://media.api-sports.io/football/teams/2288.png" },
            { id: "M5", local: "Chivas", visita: "Necaxa", imgL: "https://media.api-sports.io/football/teams/2284.png", imgV: "https://media.api-sports.io/football/teams/2292.png" },
            { id: "M6", local: "Pumas", visita: "Tijuana", imgL: "https://media.api-sports.io/football/teams/2295.png", imgV: "https://media.api-sports.io/football/teams/2291.png" },
            { id: "M7", local: "Toluca", visita: "Atl. San Luis", imgL: "https://media.api-sports.io/football/teams/2280.png", imgV: "https://media.api-sports.io/football/teams/2293.png" },
            { id: "M8", local: "Querétaro", visita: "Puebla", imgL: "https://media.api-sports.io/football/teams/2294.png", imgV: "https://media.api-sports.io/football/teams/2278.png" },
            { id: "M9", local: "León", visita: "Mazatlán", imgL: "https://media.api-sports.io/football/teams/2286.png", imgV: "https://media.api-sports.io/football/teams/2279.png" },
            { id: "RES", local: "León", visita: "Mazatlán", imgL: "https://media.api-sports.io/football/teams/2286.png", imgV: "https://media.api-sports.io/football/teams/2279.png" }
        ],
        fin_semana: []
    },
    premier: {
        media_semana: [
            { id: "P1", local: "Arsenal", visita: "Chelsea", imgL: "https://media.api-sports.io/football/teams/42.png", imgV: "https://media.api-sports.io/football/teams/49.png" },
            { id: "RES", local: "Liverpool", visita: "Everton", imgL: "https://media.api-sports.io/football/teams/40.png", imgV: "https://media.api-sports.io/football/teams/45.png" }
        ],
        fin_semana: []
    },
    laliga: {
        media_semana: [
            { id: "S1", local: "Real Madrid", visita: "Getafe", imgL: "https://media.api-sports.io/football/teams/541.png", imgV: "https://media.api-sports.io/football/teams/546.png" },
            { id: "RES", local: "Barcelona", visita: "Espanyol", imgL: "https://media.api-sports.io/football/teams/529.png", imgV: "https://media.api-sports.io/football/teams/540.png" }
        ],
        fin_semana: []
    }
};
