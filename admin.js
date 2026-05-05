/* 
   GUIA PARA EL CLIENTE:
   Aquí gestionas las ligas y si los partidos son de Media Semana o Fin de Semana.
*/
const DB_PARTIDOS = {
    liga_mx: {
        media_semana: [
            { id: "mx_m1", local: "América", visita: "Pachuca", imgL: "https://media.api-sports.io/football/teams/2287.png", imgV: "https://media.api-sports.io/football/teams/2283.png" },
            { id: "mx_m2", local: "Tigres", visita: "Juárez", imgL: "https://media.api-sports.io/football/teams/2282.png", imgV: "https://media.api-sports.io/football/teams/2290.png" }
        ],
        fin_semana: [
            { id: "mx_f1", local: "Chivas", visita: "Cruz Azul", imgL: "https://media.api-sports.io/football/teams/2284.png", imgV: "https://media.api-sports.io/football/teams/2289.png" },
            { id: "mx_f2", local: "Pumas", visita: "Monterrey", imgL: "https://media.api-sports.io/football/teams/2295.png", imgV: "https://media.api-sports.io/football/teams/2281.png" }
        ]
    },
    premier: {
        media_semana: [
            { id: "en_m1", local: "Chelsea", visita: "Everton", imgL: "https://media.api-sports.io/football/teams/49.png", imgV: "https://media.api-sports.io/football/teams/45.png" }
        ],
        fin_semana: [
            { id: "en_f1", local: "Man. City", visita: "Arsenal", imgL: "https://media.api-sports.io/football/teams/50.png", imgV: "https://media.api-sports.io/football/teams/42.png" }
        ]
    }
};
