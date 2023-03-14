document.write("Jáger Adrienn Team11 Junior Frontend"+"<br>");
document.write("<hr>");

document.write("1.feladat"+"<br>"+"<br>");

function KockaFelszin(a){
    return (a*a)*6;
}

document.write(`a 2 oldalú kocka felszíne: ${KockaFelszin(2)}`+"<br>");
document.write(`a 3 oldalú kocka felszíne: ${KockaFelszin(3)}`+"<br>");
document.write(`az 5 oldalú kocka felszíne: ${KockaFelszin(5)}`+"<br>");
document.write("<hr>");


document.write("2.feladat"+"<br>"+"<br>");

function KockaTerfogat(a){
  return a**3;
}

document.write(`a 2 oldalú kocka térfogata: ${KockaTerfogat(2)}`+"<br>");
document.write(`a 3 oldalú kocka térfogata: ${KockaTerfogat(3)}`+"<br>");
document.write(`az 5 oldalú kocka térfogata: ${KockaTerfogat(5)}`+"<br>");
document.write("<hr>");



document.write("3.feladat"+"<br>"+"<br>");

function PhErtek(vizsgaltErtek){
    let phTomb= ["savas","semleges","lúgos"];
    if (vizsgaltErtek<7){ return phTomb[0] }
    else if(vizsgaltErtek==7) {return phTomb[1]}
    else {return phTomb[2]}
}

document.write(`9 ph: ${PhErtek(9)}`+"<br>");
document.write(`5.5 ph: ${PhErtek(5.5)}`+"<br>");
document.write(`7 ph: ${PhErtek(7)}`+"<br>");
document.write("<hr>");



document.write("4.feladat"+"<br>"+"<br>");

function ElsoNSzamOsszege(szamokMenyisege){
    let nSzamOsszeg=0;
    if (szamokMenyisege>0) {
        if (szamokMenyisege==1){nSzamOsszeg=1}
        else {
            for (i=1;i<=szamokMenyisege;i++){
              nSzamOsszeg+=i;
            }
        }
    }
    return nSzamOsszeg;
}

document.write(`Az első 3 szám összege: ${ElsoNSzamOsszege(3)}`+"<br>");
document.write(`Az első 10 szám összege: ${ElsoNSzamOsszege(10)}`+"<br>");
document.write(`Az első 21 szám összege: ${ElsoNSzamOsszege(21)}`+"<br>");
document.write("<hr>");


document.write("5.feladat"+"<br>"+"<br>");

function MaxParos(vizsgaltTomb){
    let parosak= vizsgaltTomb.filter( (item) => (item%2==0) );
    let parosMaxSzam= Math.max( ...parosak);
    return parosMaxSzam;
}

document.write(`A [12,3,7,19,21] tömb maximum páros száma: ${MaxParos([12,3,7,19,21])}`+"<br>");
document.write(`A [28,14,2,42,69] első 10 szám összege: ${MaxParos([28,14,2,42,69])}`+"<br>");
document.write(`A [32,21,54,33,21] első 21 szám összege: ${MaxParos([32,21,54,33,21])}`+"<br>");
document.write("<hr>");


document.write("6.feladat"+"<br>"+"<br>");

function MaganHangzokSzama(vizsgaltSzoveg){
    let maganhangzok="aAáÁeEéÉiIíÍoOóÓöÖőŐuUúÚüÜűŰ";
    let maganHangzoDB=0;
    for (let i=0; i<vizsgaltSzoveg.length; i++){
        if (maganhangzok.includes(vizsgaltSzoveg[i])){
            maganHangzoDB++;
        }
    }
  return maganHangzoDB;
}

document.write(`A Szeretem a programozást szöveg magánhangzóinak száma: ${MaganHangzokSzama("Szeretem a programozást")}`+"<br>");
document.write(`A Géza kék az ég szöveg magánhangzóinak száma: ${MaganHangzokSzama("Géza kék az ég")}`+"<br>");
document.write(`A Répa, retek, mogyoró szöveg magánhangzóinak száma: ${MaganHangzokSzama("Répa, retek, mogyoró")}`+"<br>");

document.write("<hr>");


document.write("7.feladat"+"<br>"+"<br>");

function SzovegVisszafele(szoveg){
    let visszafele="";
    for (let i=szoveg.length-1; i>=0; i--){
        visszafele+=szoveg[i];
    }
    return visszafele;
}

document.write(`A Szeretem a programozást szöveg viszafelé: ${SzovegVisszafele("Szeretem a programozást")}`+"<br>");
document.write(`A Géza kék az ég szöveg viszafelé: ${SzovegVisszafele("Géza kék az ég")}`+"<br>");
document.write(`A Répa, retek, mogyoró szöveg viszafelé: ${SzovegVisszafele("Répa, retek, mogyoró")}`+"<br>");

document.write("<hr>");


document.write("8.feladat"+"<br>"+"<br>");

const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];

function CegAtlagEletkor(vizsgaltObjTomb){
    let osszeg=0;
    vizsgaltObjTomb.map( (item) => (osszeg+=item.kor));
    let atlagKor=Math.round(osszeg /vizsgaltObjTomb.length);
    return atlagKor;
}
document.write(`A dolgozók átlagéletkora: ${CegAtlagEletkor(Dolgozok)}`+"<br>");

document.write("<hr>");
