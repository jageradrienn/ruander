//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből minden második karaktert törli.

function CsakAFele(felezendoSzoveg){
    let feletezettSzoveg="";
    for (let i=0;i<felezendoSzoveg.length;i+=2){
        feletezettSzoveg+=felezendoSzoveg[i];
    }

    return feletezettSzoveg;
}

document.write(`A felezett szöveg: ${CsakAFele(prompt("Adja meg a felezendő szöveget: "))}`);

//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből bizonyos szintén paraméterként kapott karaktert töröl.

let Tabusito = function (tabusitando,mitTorol){
    if (tabusitando.includes(mitTorol)){
        let tabusitottSzoveg = tabusitando.replaceAll(mitTorol,'');
        return document.write(`A tabusított szöveg: ${tabusitottSzoveg}`);

    }
    else{
        document.write("Nincs ilyen karakter a szövegben!");
    }
}
Tabusito(prompt("Adja meg a tabusítandó szöveget: "),prompt("Adja meg a tabusító karaktert: "));

//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből törli az összes magánhangzót.

function MaganhangzoTabusito(tabusitando){
    let maganhangzok="aAáÁeEéÉiIíÍoOóÓöÖőŐuUúÚüÜűŰ";
    let tabusitottSzoveg="";
    for (let i=0;i<tabusitando.length;i++){
        if (!(maganhangzok.includes(tabusitando[i]))){
            tabusitottSzoveg+=tabusitando[i];
        }
    }
    return tabusitottSzoveg;
}

document.write(`A magánhangzót nem tartalmazó szöveg: ${MaganhangzoTabusito(prompt("Adja meg a mássalhangzóssá alakítandó szöveget: "))}`);
