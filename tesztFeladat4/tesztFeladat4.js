//1. feladat
function EkezetesBetukSzama(modositandoSzoveg) {
    var ekezetesek = "áÁéÉöÖőŐóÓúÚűŰíÍiI";
    var ekezetesekDb = 0;
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        (ekezetesek.includes(modositandoSzoveg[i])
            ? ekezetesekDb++
            : null);
    }
    return ekezetesekDb;
}
console.log("1. feladat: az \u00E9kezetes bet\u0171k sz\u00E1ma: ".concat(EkezetesBetukSzama("Kék az ég és ragyogó a nap!")));
//2. feladat
function camelCaseGenerator(modositandoSzoveg) {
    var camelCaseSzoveg = modositandoSzoveg[0].toUpperCase();
    for (var i = 1; i < modositandoSzoveg.length; i++) {
        (modositandoSzoveg[i] != ' ') ? camelCaseSzoveg += modositandoSzoveg[i]
            : (camelCaseSzoveg += modositandoSzoveg[i + 1].toUpperCase(), i++);
    }
    return camelCaseSzoveg;
}
console.log("2. feladat: A camelCase sz\u00F6veg ".concat(camelCaseGenerator("Kék az ég és ragyogó a nap!")));
//3.feladat
function PrimLista(vizsgaltTomb) {
    var primDb = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var oszto = 1;
        for (var j = 2; j <= vizsgaltTomb[i]; j++) {
            ((vizsgaltTomb[i] % j) == 0) ? oszto++ : null;
        }
        (oszto == 2) ? primDb++ : null;
    }
    if (primDb > 0) {
        return "A t\u00F6mbben ".concat(primDb, " darab pr\u00EDm sz\u00E1m tal\u00E1lhat\u00F3!");
    }
    else {
        return "Nincs pr\u00EDmsz\u00E1m a t\u00F6mbben!";
    }
}
console.log("3.feladat: ".concat(PrimLista([5, 7, 12, 6])));
