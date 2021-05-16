//pregunta # 3
var e = "✅";
var s = " ";
var convertir = function () {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    var con = "";
    for (var i = 0; i < name.length; i++) {
        var es = 23 - name[i].length;
        for (var j = 0; j < name[i].length; j++) {
            if (name[i].charAt(j) != " ") {
                if (name[i].charAt(j) != "_") {
                    con = con + name[i].charAt(j).toLowerCase();
                    if (j == name[i].length - 1) {
                        console.log(con + s.repeat(es + 1) + e.repeat(i + 1));
                        con = "";
                    }
                }
                else {
                    con = con + name[i].charAt(j + 1).toUpperCase();
                    j++;
                }
            }
            else {
                es = es + 1;
            }
        }
    }
};
convertir("underscore_case", " first_name", "Some_Variable", "  calculate_AGE", "delayed_departure");
