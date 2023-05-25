function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}


function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Kék az ég és ragyogó a nap!", 4, EkezetesBetukSzama("Kék az ég és ragyogó a nap!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Kék az ég és ragyogó a nap!", 4);
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Nyári víg szellő szalad a lombok között!", 6, EkezetesBetukSzama("Nyári víg szellő szalad a lombok között!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Nyári víg szellő szalad a lombok között!", 6);
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Szeretem a programozást!", 1, EkezetesBetukSzama("Szeretem a programozást!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("1. feladat: az ékezetes betűk száma:", "Szeretem a programozást!", 1);
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Kék az ég és ragyogó a nap!", "kékAzÉgÉsRagyogóANap!", camelCaseGenerator("Kék az ég és ragyogó a nap!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Kék az ég és ragyogó a nap!", "kékAzÉgÉsRagyogóANap!");
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Nyári víg szellő szalad a lombok között!", "nyáriVígSzellőSzaladALombokKözött!", camelCaseGenerator("Nyári víg szellő szalad a lombok között!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Nyári víg szellő szalad a lombok között!", "nyáriVígSzellőSzaladALombokKözött!");
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Szeretem a programozást!", "szeretemAProgramozást!", camelCaseGenerator("Szeretem a programozást!"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("2. feladat: A camelCase szöveg", "Szeretem a programozást!", "szeretemAProgramozást!");
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("3.feladat:", "[5,7,12,6]", "A tömbben 2 darab prím szám található!", PrimLista([5,7,12,6]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("3.feladat:", "[5,7,12,6]", "A tömbben 2 darab prím szám található!");
    }
}

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("3.feladat:", "[8,7,12,6]", "A tömbben 1 darab prím szám található!", PrimLista([8,7,12,6]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("3.feladat:", "[8,7,12,6]", "A tömbben 1 darab prím szám található!");
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("3.feladat:", "[8,10,12,6]", "Nincs prímszám a tömbben!", PrimLista([8,10,12,6]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("3.feladat:", "Szeretem a programozást!", "SzeretemAProgramozást!");
    }
}


 

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
}
TesztFuttato();