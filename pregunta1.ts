//PREGUNTA # 1
var equip1:string = "Bayern Munich";
var equip2:string = "Borrussia Dortmud";

//Tarea #1
var jugadores1: Array <string> = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
                                  'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
var jugadores2: Array <string> = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
                                 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];

//Tarea #2
var gk: string = jugadores1[0];
var fieldPlayers: Array <string> = jugadores1.slice(1);
console.log(gk)
console.log(fieldPlayers)

//Tarea # 3
var allPlayers: Array <string> = jugadores1.concat(jugadores2);
console.log(allPlayers)

//Tarea #4
var players1Final: Array <string> = jugadores1;
players1Final.push('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final)

//Tarea #5
var equipo1:number = 1.33;
var empate:number = 3.25;
var equipo2:number = 6.5;


//Tarea #6
var printGoals = function (...nam){
    var ban:Array <string> = [];
    for (let i:number = 0; i < nam.length; i++){
        if (ban.includes(nam[i]) == false){
            var num:number = 1;
            for (let j:number = i+1; j < nam.length; j++){
                if (nam[i] == nam[j]){
                    num = num + 1;
                }
            }
            console.log(nam[i]+ " +"+ num+ " goals")
            ban.push(nam[i])
        }
    }
}
printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Hummels", "otro", "Lewandowski");

//Tarea #7
console.log(Math.min(equipo1, equipo2) === equipo1 && "el equipo que tiene las probabilidades de ganar es el: "+ equip1)
console.log(Math.min(equipo1, equipo2) === equipo2 && "el equipo que tiene las probabilidades de ganar es el: "+ equip2)

