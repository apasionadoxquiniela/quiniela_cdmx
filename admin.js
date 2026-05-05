/* 
   GUIA PARA EL CLIENTE:
   Para cambiar equipos, solo cambia el nombre y el numero de la 'id'.
   Los escudos se cargan automaticamente usando el nombre del equipo.
*/
const DB_PARTIDOS = {
    liga_mx: [
        { id: "america", local: "América", visita: "Cruz Azul", imgL: "https://media.api-sports.io/football/teams/2287.png", imgV: "https://media.api-sports.io/football/teams/2289.png" },
        { id: "chivas", local: "Guadalajara", visita: "Pumas UNAM", imgL: "https://media.api-sports.io/football/teams/2284.png", imgV: "https://media.api-sports.io/football/teams/2295.png" }
    ],
    premier: [
        { id: "city", local: "Man. City", visita: "Liverpool", imgL: "https://media.api-sports.io/football/teams/50.png", imgV: "https://media.api-sports.io/football/teams/40.png" },
        { id: "arsenal", local: "Arsenal", visita: "Man. United", imgL: "https://media.api-sports.io/football/teams/42.png", imgV: "https://media.api-sports.io/football/teams/33.png" }
    ],
    laliga: [
        { id: "madrid", local: "Real Madrid", visita: "Barcelona", imgL: "https://media.api-sports.io/football/teams/541.png", imgV: "https://media.api-sports.io/football/teams/529.png" }
    ]
};
