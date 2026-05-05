/* 
   GUÍA PARA EL CLIENTE:
   Aquí puedes cambiar los equipos de cada liga. 
   Cada liga de 'media_semana' debe tener 9 partidos + 1 de reserva (ID: "RES").
*/
const DB_PARTIDOS = {
    liga_mx: {
        media_semana: [
            { id: "M1", local: "América", visita: "Pachuca", imgL: "https://media.api-sports.io/football/teams/2287.png", imgV: "https://media.api-sports.io/football/teams/2283.png" },
            { id: "M2", local: "Tigres", visita: "Juárez", imgL: "https://media.api-sports.io/football/teams/2282.png", imgV: "https://media.api-sports.io/football/teams/2290.png" },
            { id: "M3", local: "Cruz Azul", visita: "Atlas", imgL: "https://media.api-sports.io/football/teams/2289.png", imgV: "https://media.api-sports.io/football/teams/2285.png" },
            { id: "M4", local: "Monterrey", visita: "Santos", imgL: "https://media.api-sports.io/football/teams/2281.png", imgV: "https://media.api-sports.io/football/teams/2288.png" },
            { id: "M5", local: "Chivas", visita: "León", imgL: "https://media.api-sports.io/football/teams/2284.png", imgV: "https://media.api-sports.io/football/teams/2286.png" },
            { id: "M6", local: "Pumas", visita: "Tijuana", imgL: "https://media.api-sports.io/football/teams/2295.png", imgV: "https://media.api-sports.io/football/teams/2291.png" },
            { id: "M7", local: "Toluca", visita: "Necaxa", imgL: "https://media.api-sports.io/football/teams/2280.png", imgV: "https://media.api-sports.io/football/teams/2292.png" },
            { id: "M8", local: "Atl. San Luis", visita: "Querétaro", imgL: "https://media.api-sports.io/football/teams/2293.png", imgV: "https://media.api-sports.io/football/teams/2294.png" },
            { id: "M9", local: "Mazatlán", visita: "Puebla", imgL: "https://media.api-sports.io/football/teams/2279.png", imgV: "https://media.api-sports.io/football/teams/2278.png" },
            { id: "RES", local: "COMODÍN", visita: "RESURSO", imgL: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png", imgV: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png" }
        ],
        fin_semana: []
    },
    premier: {
        media_semana: [
            { id: "P1", local: "Arsenal", visita: "Chelsea", imgL: "https://media.api-sports.io/football/teams/42.png", imgV: "https://media.api-sports.io/football/teams/49.png" },
            // Agregar los otros 8 partidos siguiendo el mismo formato
            { id: "RES", local: "RESERVA", visita: "PREMIER", imgL: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png", imgV: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png" }
        ],
        fin_semana: []
    },
    laliga: {
        media_semana: [
            { id: "S1", local: "Real Madrid", visita: "Getafe", imgL: "https://media.api-sports.io/football/teams/541.png", imgV: "https://media.api-sports.io/football/teams/546.png" },
            // Agregar los otros 8 partidos siguiendo el mismo formato
            { id: "RES", local: "RESERVA", visita: "ESPAÑA", imgL: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png", imgV: "https://cdn-icons-png.flaticon.com/512/5323/5323982.png" }
        ],
        fin_semana: []
    }
};
