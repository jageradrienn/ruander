//1. feladat
function EkezetesBetukSzama(modositandoSzoveg) {
    let ekezetesek = "áÁéÉöÖőŐóÓúÚűŰíÍiI";
    let ekezetesekDb = 0;
    for (let i = 0; i < modositandoSzoveg.length; i++) {
        (ekezetesek.includes(modositandoSzoveg[i])
            ? ekezetesekDb++
            : null);
    }
    return ekezetesekDb;
}
//Viki így csinálta:
/*if (ekezetesBetuk.indexOf(modositandoSzoveg[i]) >= 0) {
      osszeg++;
    }
 */
console.log(`1. feladat: az ékezetes betűk száma: ${EkezetesBetukSzama("Kék az ég és ragyogó a nap!")}`);
//2. feladat
function camelCaseGenerator(modositandoSzoveg) {
    let camelCaseSzoveg = modositandoSzoveg[0].toLowerCase();
    for (let i = 1; i < modositandoSzoveg.length; i++) {
        (modositandoSzoveg[i] != ' ') ? camelCaseSzoveg += modositandoSzoveg[i].toLowerCase()
            : (camelCaseSzoveg += modositandoSzoveg[i + 1].toUpperCase(), i++);
    }
    return camelCaseSzoveg;
}
console.log(`2. feladat: A camelCase szöveg ${camelCaseGenerator("Kék az ég és ragyogó a nap!")}`);
//3.feladat
function PrimLista(vizsgaltTomb) {
    let primDb = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let oszto = 1;
        for (let j = 2; j <= vizsgaltTomb[i]; j++) {
            ((vizsgaltTomb[i] % j) == 0) ? oszto++ : null;
        }
        (oszto == 2) ? primDb++ : null;
    }
    if (primDb > 0) {
        return `A tömbben ${primDb} darab prím szám található!`;
    }
    else {
        return `Nincs prímszám a tömbben!`;
    }
}
console.log(`3.feladat: ${PrimLista([5, 7, 12, 6])}`);
