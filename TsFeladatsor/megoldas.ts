// 1.feladat

function DiakInfo(nev:string, csoport:number, tipus:boolean):string{
    var diakInfoSzoveg:string='';
    var csoportSzoveg='';
    (csoport<10) ? csoportSzoveg='0'+csoport : csoportSzoveg=csoport.toString();
    (tipus) ? diakInfoSzoveg=`${nev} [Team0${csoportSzoveg}] - Junior Frontend` : diakInfoSzoveg=`${nev} [Team0${csoportSzoveg}] - Webprogramozó`
 return diakInfoSzoveg;
}

document.querySelector("#elso").innerText=DiakInfo("Minta Márton", 8, true);

//2.feladat

function SzovegesErtekeles(jegy:number):[string,string]{
    var szorgalom:string='';
    var magatartas:string='';
    if (jegy <=5 && jegy>=2) {
        (jegy==5) ? (szorgalom= '[Példás', magatartas='Példás]') 
        : (jegy==4) ? (szorgalom= '[Jó', magatartas='Jó]')
        : (jegy==3) ? (szorgalom= '[Változó', magatartas='Változó]')
        :(jegy==2) ? (szorgalom= '[Hanyag', magatartas='Rossz]')
        :null
    }
    return [szorgalom, magatartas];
}

document.querySelector("#masodik").innerText=SzovegesErtekeles(2);

// 3.feladat
function HarommalOszthatokSzama(tomb:number[]):number{
    let dbSzam:number=0;
    tomb.forEach( item => item % 3==0 ? dbSzam++ :item);
    return dbSzam;
}

document.querySelector("#harmadik").innerText=HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]);

//4. feladat

function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number){
    var generaltTomb:Array<number>=[];
    var talalt:boolean=false;
    var generaltSzam:number=0;
    for(let i:number=1;i<=mennyiseg;i++){
        generaltSzam = Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
        if (generaltTomb.length==null) { generaltTomb.push(generaltSzam)}
        else if (!(generaltTomb.includes(generaltSzam))){
            generaltTomb.push(generaltSzam);
        }
        else {i--}
    }
    return generaltTomb;
}

document.querySelector("#negyedik").innerText=Nyeroszamok(5,1,90);