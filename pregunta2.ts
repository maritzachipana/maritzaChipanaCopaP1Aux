
//Pregunta 2
//Tarea #1
var fac:number = 320;
var tip = (fac >= 50 && fac <= 300)? fac * 0.15: fac * 0.2;
console.log(tip)

//Trea #2
console.log("La factura fue"+ " "+ fac+ ", la propina fue"+ " "+ tip+ " y el valor total fue"+ " "+ (fac+tip)); 

//Tarea #3
var calcTip = function (a:number){
    let b:number = (a >= 50 && a <= 300)? a * 0.15: a * 0.2
    return b;
}
console.log(calcTip(100));

//Tarea #4
var facturas: Array <number> = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//Tarea #5
var propinas: Array <number> = [];
var totales: Array <number> = [];

//Tarea #6
for(let i:number = 0; i<facturas.length; i++){
    propinas.push(calcTip(facturas[i]));
    totales.push(calcTip(facturas[i]) + facturas[i]);
}
var b: number = 1;
for(let j:number = 0; j<facturas.length; j++){
    console.log("La factura "+ b+ " fue de "+ facturas[j]+ " con un propina de "+ propinas[j]+ " y un valor total de "+ totales[j]);
    b++;
}

