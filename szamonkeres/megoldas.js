//Javascript felmérő

<script>
//Jáger Adrienn Team11 Junior Frontend

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
    ]

    //Készítsen egy függvényt, amely ellenőrzi egy bemeneti karakterlánc hosszát

    function HosszEllenor(karakterlanc){
	if (karakterlanc.length<8) {
        return false;
    }

    return true;
}

    function Eredmenykiiro(eredmeny,trueszoveg,falseszoveg){
	if (eredmeny==true){
        document.write("<br>" + trueszoveg);
	}
    else {
        document.write("<br>" + falseszoveg);
    }


}
    Eredmenykiiro(HosszEllenor("teszt"),"A karakterlánc hossza megfelelő!","A karakterlánc hossza nem megfelelő, rövidebb, mint 8 karakter!")
    Eredmenykiiro(HosszEllenor("feladatteszt"),"A karakterlánc hossza megfelelő!","A karakterlánc hossza nem megfelelő, rövidebb, mint 8 karakter!")

    //TAjszám ellenőrzés

// TAJ ellenőr

function tajSzamEllenor(tajSzoveg){
    if (tajSzoveg.length<9 || tajSzoveg.length>9) {
        document.write("<br>" + "A TAJ szám hossza nem megfelelő!");
    }
    else {
        let parosEredmeny=0;
        let paratlanEredmeny=0;
        let parososszeg=0;
        let paratlanosszeg=0;
        for (let i=1; i<tajSzoveg.length; i+=2){
            parososszeg = parososszeg + Number(tajSzoveg[i]);
            parosEredmeny=parososszeg*7;
        }
        for (let i=0; i<tajSzoveg.length; i+=2){
            paratlanosszeg = paratlanosszeg + Number(tajSzoveg[i]);
            paratlanEredmeny=paratlanosszeg*3;
        }
        let szamitas=((parosEredmeny+paratlanEredmeny)%10)==tajSzoveg[8];
        Eredmenykiiro(szamitas,"A TAJ szám megfelelő!","A TAJ szám nem megfelelő!");

    }

}
tajSzamEllenor("040655330");
tajSzamEllenor("111111111");
tajSzamEllenor("037687210");

//Tömb terjedelem
document.write("<br>"+"Tömb terjedelem");

function TombTerjedelem(vizsgalandoTomb){
    let minimumErtek=vizsgalandoTomb[0];
    let maximumErtek=vizsgalandoTomb[0];
    for (let i=1;i<vizsgalandoTomb.length;i++){
        if (vizsgalandoTomb[i] < minimumErtek){
            minimumErtek=vizsgalandoTomb[i];
        }
    }
    for (let j=1;j<vizsgalandoTomb.length;j++){
        if (vizsgalandoTomb[j] > maximumErtek){
            maximumErtek=vizsgalandoTomb[j];
        }
    }
    document.write(maximumErtek-minimumErtek);
}

TombTerjedelem([3, 5, 10, 16, 9]);

//Legidősebb dolgozó

function legidosebbDolgozo(dolgozoObj){
    let maxErtek=dolgozoObj[0].kor;
    let maxIndex=0;
    for (let i=1;i<dolgozoObj.length;i++){
        if (dolgozoObj[i].kor > maxErtek){
            maxErtek=dolgozoObj[i];
            maxIndex=i;
        }
    }
document.write("<br>"+`A legiősebb objektum elem indexe:`+maxIndex);
}

legidosebbDolgozo(Dolgozok);



//Fizetésemelés


function fizetesEmeles(dolgozoObj) {
    let atlagFizetes=0;
    let osszeg=0;
    let emeltFizetes=[];
    for (let i=0;i<dolgozoObj.length;i++){
        osszeg+=dolgozoObj[i].fizetes;
    }
    atlagFizetes=parseInt(osszeg/dolgozoObj.length);
    for (let i=0;i<dolgozoObj.length;i++){
        if (dolgozoObj[i].fizetes < atlagFizetes){
            dolgozoObj[i].fizetes=parseInt((dolgozoObj[i].fizetes*1.1));
        }
        emeltFizetes.push({nev:dolgozoObj[i].nev,kor:dolgozoObj[i].kor,fizetes:dolgozoObj[i].fizetes,beosztas:dolgozoObj[i].beosztas});
    }
    return emeltFizetes;
}


function ObjektumKiiro(objektum){
    for (let i=0;i<objektum.length;i++){
        document.write("<br>"+`nev:${objektum[i].nev},kor: ${objektum[i].kor},fizetes: ${objektum[i].fizetes},beosztas: ${objektum[i].beosztas}`)    
    }
}

ObjektumKiiro(fizetesEmeles(Dolgozok))





</script>