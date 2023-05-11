const eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
  ];

  interface helsinkiEredmenyek {
        helyezes:number,
        letszam:number,
        sportag:string,
        versenyszam:string
  }

  function Adatbetolto(adatok:string[]):helsinkiEredmenyek[]{
    var adatTomb:helsinkiEredmenyek[]=[];
    adatok.forEach( item => {
        var adatSor:string[]=item.split(' ');
        adatTomb.push({helyezes:Number(adatSor[0]),letszam:Number(adatSor[1]),sportag:adatSor[2],versenyszam:adatSor[3] })
    } )
    return adatTomb;
  }

  const helsinkiAdatok= Adatbetolto(eredmenyek);

  //3. feladat

function Pontszerzo(adatTomb:helsinkiEredmenyek[]):string{
    return `3.feladat \nPontszerző helyezések száma: ${adatTomb.length}`
}
console.log(Pontszerzo(helsinkiAdatok));

//4.feladat

function Ermek(adatTomb:helsinkiEredmenyek[]):[number,number,number]{
    var arany:number=0;
    var ezust:number=0;
    var bronz:number=0;
    adatTomb.forEach( (item) => {
        (item.helyezes==1) ? arany++ 
        : (item.helyezes==2) ? ezust++
        : (item.helyezes==3) ? bronz++ : null; 
    })
    return [arany, ezust, bronz]
}
var eremadatok:[number,number,number]= Ermek(helsinkiAdatok)
console.log(`4.feladat: \nArany:${eremadatok[0]},\nEzüst:${eremadatok[1]} \nBronz${eremadatok[0]}`);

//5.feladat

function OlimpiaiPontok(adatTomb:helsinkiEredmenyek[]):string{
    var osszegzoTomb:number[]=[0,7,5,4,3,2,1];
    adatTomb.forEach( (item) => {
        osszegzoTomb[0]=osszegzoTomb[0]+osszegzoTomb[item.helyezes];
    })
    return `5.feladat: \n Olimpiai pontok száma: ${osszegzoTomb[0]}`;

}
console.log(OlimpiaiPontok(helsinkiAdatok)+"");

//6.feladat

function UszasTorna(adatTomb:helsinkiEredmenyek[]):string{
    var uszas:number=0;
    var torna:number=0;
    adatTomb.forEach( (item) => {
        (item.sportag=="uszas") ?uszas++
        : (item.sportag=="torna") ?torna++ :null;
    })
    if (uszas>torna) {return "6.feladat: \n Úszás sportágban szerezte több érmet"}
    else if ((uszas<torna)) {return "6.feladat: \n Torna sportágban szerezte több érmet"}
    else {return "6.feladat: \n Egyenlő volt az érmek száma"};
}
    
console.log(UszasTorna(helsinkiAdatok)+"");

//7.feladat

function LegtobbLetszam(adatTomb:helsinkiEredmenyek[]):string{
    var maxErtek:number=0;
    var maxIndex:number=0;
    adatTomb.forEach( (item,index) => {
        (item.letszam>maxErtek) ? (maxErtek=item.letszam, maxIndex=index) :item
    })
return(`7.feladat: \nHelyezés: ${adatTomb[maxIndex].helyezes} \nSportág: ${adatTomb[maxIndex].sportag} \nVersenyszam: ${adatTomb[maxIndex].versenyszam} \nSportolók száma: ${adatTomb[maxIndex].letszam}`)
}
console.log(LegtobbLetszam(helsinkiAdatok)+"");