
//pregunta # 3
var e:string = "✅";
var s:string = " ";
var convertir = function (...name){
    var con:string = "";
    for(let i:number = 0; i<name.length; i++){
        var es:number = 23 - name[i].length;
        for(let j:number = 0; j<name[i].length; j++){
            if (name[i].charAt(j) != " "){
                if (name[i].charAt(j) != "_"){
                    con = con + name[i].charAt(j).toLowerCase();
                    if (j == name[i].length - 1){
                        console.log(con+ s.repeat(es+1)+ e.repeat(i + 1) )
                        con = "";
                    }
                }
                else{
                    con = con + name[i].charAt(j+1).toUpperCase();
                    j++; 
                }
            }
            else{
                es = es + 1;
            }
        }
    } 
}
convertir("underscore_case", " first_name", "Some_Variable", "  calculate_AGE", "delayed_departure");