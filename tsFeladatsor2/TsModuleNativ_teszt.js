//Generált random szám értékének tesztje
function F1teszt(aH, fH) {
    let fEredmeny = Rng(aH, fH);
    if (fEredmeny >= aH && fEredmeny <= fH) {
        //return true;
        document.write(`<tr><td>Random szám generáló teszt</td><td>${aH},${fH}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        //return false;
        document.write(`<tr><td>Random szám generáló teszt</td><td>${aH},${fH}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

//Generált tömb méretének tesztje
function F2teszt1(M, aH, fH) {
    let fEredmeny = TombGenerator(M, aH, fH);
    if (fEredmeny.length == M) {
        document.write(`<tr><td>Random tömb generáló teszt elemek száma</td><td>${M},${aH},${fH}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        document.write(`<tr><td>Random tömb generáló teszt elemek száma</td><td>${M},${aH},${fH}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

//Generált tömb értékeinek tesztje
function F2teszt2(M, aH, fH) {
    fEredmeny = TombGenerator(M, aH, fH);
    let sikeresseg = true;
    for (let i = 0; i < fEredmeny.length; i++) {
        if (fEredmeny[i] < aH || fEredmeny[i] > fH) {
            sikeresseg = false;
        }
    }
    if (sikeresseg == true) {
        document.write(`<tr><td>Random tömb generáló teszt elemek értéke</td><td>${M},${aH},${fH}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        document.write(`<tr><td>Random tömb generáló teszt elemek értéke</td><td>${M},${aH},${fH}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

//Tömb elem duplázó függvény tesztje
function F3teszt(mintaErtek, elvartErtek) {
    let fEredmeny = Duplazo(mintaErtek);
    let sikeresseg = true;
    for (let i = 0; i < elvartErtek.length; i++) {
        if ((fEredmeny[i]) != elvartErtek[i]) {
            sikeresseg = false;
        }
    }
    if (sikeresseg == true) {
        document.write(`<tr><td>Duplázó függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        document.write(`<tr><td>Duplázó függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

//Tömbben lévő prímszám megszámláló tesztje
function F4teszt(mintaErtek, elvartErtek) {
    let fEredmeny = PrimekSzama(mintaErtek);
    if (fEredmeny == elvartErtek) {
        document.write(`<tr><td>Prímek száma függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        document.write(`<tr><td>Prímek száma függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

//Tömbben elemeit szűrő függvény tesztje
function F5teszt(mintaErtek, elvartErtek) {
    let fEredmeny = EgyediElemek(mintaErtek);
    let sikeresseg = true;
    for (let i = 0; i < elvartErtek.length; i++) {
        if ((fEredmeny[i]) != elvartErtek[i]) {
            sikeresseg = false;
        }
    }
    if (sikeresseg == true) {
        document.write(`<tr><td>Egyedi elemek függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikeres teszt</td></tr>`);
    }
    else {
        document.write(`<tr><td>Egyedi elemek függvény tesztje</td><td>${mintaErtek}</td><td>${fEredmeny}</td><td>Sikertelen teszt</td></tr>`);
    }
}

function TesztEsetek() {
            document.write("<table class=\"table table-info table-sm\">");
            document.write("<tr><th>Teszt elenevezése</th><th>Bemeneti paraméterek</th><th>Eredmény</th><th>Sikerült/Nem sikerült</th>");
            F1teszt(1, 30);
            F1teszt(20, 50);
            F1teszt(30, 100);
            F2teszt1(10, 1, 30);
            F2teszt1(20, 20, 50);
            F2teszt1(5, 30, 100);
            F2teszt2(10, 1, 30);
            F2teszt2(20, 20, 50);
            F2teszt2(5, 30, 100);
            F3teszt([3, 10, 5], [6, 20, 10]);
            F3teszt([1, 2, 3], [2, 4, 6]);
            F3teszt([-1, -5, 5], [-2, -10, 10]);
            F4teszt([3, 7, 5], 3);
            F4teszt([23, 12, 14], 1);
            F4teszt([32, 64, 12], 0);
            F5teszt([3, 7, 7], [3, 7]);
            F5teszt([5, 5, 5], [5]);
            F5teszt([3, 3, 5, 5, 7, 7], [3, 5, 7]);
            document.write("</table>");
        }