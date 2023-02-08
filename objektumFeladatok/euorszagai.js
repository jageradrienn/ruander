// Hány országa van EU-nak?

const EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
];

document.write(`Az Eu-nak ${EuropaiUnio.length} országa van`);

// Hányan csatlkoztak 2007-ben?
let csatlakozott2007=0;
for (let i=0;i<EuropaiUnio.length;i++){

 if (EuropaiUnio[i].csatlakozas.substr(0,4)=="2007"){
 	csatlakozott2007++;
 }

/*
Vagy így: 
 if (EuropaiUnio[i].csatlakozas.includes(2007)){
 	csatlakozott2007++;
 }

 
*/
}
document.write("<br>"+`Az Eu-hoz 2007-ben ${csatlakozott2007} ország csatlakozott.`);



//Csatlakozott-e Magyarország az EU-hoz?

function HUCsatlakozott(){
	let huCsatakozottE=false;
	for (let i=0;i<EuropaiUnio.length;i++){
		huCsatakozottE=EuropaiUnio[i].orszag=="Magyarország"? document.write("<br>"+`Az Eu-hoz 2007-ben ${EuropaiUnio[i].csatlakozas} csatlakozott Magyarország.`):huCsatakozottE;
	}
}
HUCsatlakozott();
document.write("<br>"+`Az Eu-hoz 2007-ben ${csatlakozott2007} csatlakozott Magyarország.`);


//Vagy egy másik, nyelvi finomságokkal ellátott kódom :)

function HUCsatlakozott(){
	let huCsatakozottE=false;
	for (let i=0;(i<EuropaiUnio.length && !huCsatakozottE);i++){
		huCsatakozottE = EuropaiUnio[i].orszag=="Magyarország" 
        ? ((document.write("<br>"+`Az Eu-hoz ${EuropaiUnio[i].csatlakozas}-ben csatlakozott Magyarország.`),huCsatakozottE=true)) 
        : huCsatakozottE;
	} 
}
HUCsatlakozott();


//Ezt pedig a tanár írta, hogy clean kódos legyen, tehát külön vette a kiíratást, hogy ha nem volt csatlakozás akkor azt is kiírja.

function CsatlakozottEV2()
{
    for(let i=0;i<EuropaiUnio.length;i++){
    	if(EuropaiUnio[i].orszag=="Magyarország"){
        	return true;
        }
    }
return false;
}
function EredmenyKiiro(eredmeny,eredmenySzovegEgy, eredmenySzovegKetto){
	if(eredmeny==true){
		document.write("<br>"+eredmenySzovegEgy);
	}
    else{
    	document.write("<br>"+eredmenySzovegKetto);
    }
}
EredmenyKiiro(CsatlakozottEV2(), "Magyarország csatlakozott", "Magyarország nem csatlakozott");



//volt-e májusban csatlakozás ITT NEM VOLT JÓ AZ, HOGY 05! MERT AZ LEHET NAP IS! Ezért a .05. kell, hogy a feltétel legyen!
//volt-e májusban csatlakozás

/* Ebben a kódban érvényesü, hogy leáll a for ciklus előbb és ternary van, szebb. De nem állítja meg a függvényt, ha talált, mint lentebb...
function MajusiCsatlakozas(){
let majusiCsatlakozas=false;
	for (let i=0;(i<EuropaiUnio.length && !majusiCsatlakozas);i++){
		EuropaiUnio[i].csatlakozas.includes(".05.")
   		? (majusiCsatlakozas=true,(document.write("<br>"+"Az Eu-hoz csatlakozott májusban tagállam.")))
    	: majusiCsatlakozas=false;
	}
}
 MajusiCsatlakozas();


*/
//Itt leállítja a függvényt, amikor talál. Tehát a for ciklust is. De ehhez nem jó a ternary, mivel nincs hamis ága.
function MajusiCsatlakozas(){

	for (let i=0;i<EuropaiUnio.length;i++){
		if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
   		return true;
        }
	}
    return false; //Ha talált májusit, akkor visszatér true-val és ez a false nem hívódik meg. Ha pedig nincs, akkor ez a false lesz az eredmény.
}

 function EredmenyKiiro(eredmeny,eredmenySzovegEgy, eredmenySzovegKetto){
	if(eredmeny==true){
		document.write("<br>"+eredmenySzovegEgy);
	}
    else{
    	document.write("<br>"+eredmenySzovegKetto);
    }
}
EredmenyKiiro(MajusiCsatlakozas(), "Az Eu-hoz csatlakozott májusban tagállam.", "Az Eu-hoz nem csatlakozott májusban tagállam.");


//Ki kell keresni, hogy ki a legutolsó csatlakozó.


function KiCsatlakozottUtoljara(){
	let utoljaraCsatlakozott=EuropaiUnio[0];
    for (let i=1;i<EuropaiUnio.length;i++){
    	if (EuropaiUnio[i].csatlakozas>utoljaraCsatlakozott.csatlakozas){
        	utoljaraCsatlakozott=EuropaiUnio[i];
            
        }    
    }
    document.write("<br>"+`${utoljaraCsatlakozott.orszag} csatakozott utoljára`);
}
KiCsatlakozottUtoljara();


// Készíts statisztikát, melyik évben hány ország csatlakozott.
let evesOrszagok= new Array();

function StatisztikaEves(){
	
	 for (let i=0;i<EuropaiUnio.length;i++){
     	let orszagDb=1;
     	if (!( SzerepelEEvesOrszagokban(EuropaiUnio[i].csatlakozas.substring(0,4)) )){
        	for (let j=i+1;j<EuropaiUnio.length;j++ ){
            	if (EuropaiUnio[j].csatlakozas.substring(0,4) == EuropaiUnio[i].csatlakozas.substring(0,4)){
                	orszagDb++;
                }
            }     
            evesOrszagok.push({csatlakozasiEv:EuropaiUnio[i].csatlakozas.substring(0,4),orszagDarabszam:orszagDb});
        };
     }
}

function SzerepelEEvesOrszagokban(keresendoEv){

	for (let j=0;j<evesOrszagok.length;j++){
		if (keresendoEv==evesOrszagok[j].csatlakozasiEv){
        	return true;
    	}
    }
    return false;
}


function StatisztikaKiiratas(){
	StatisztikaEves();
    for (let i=0;i<evesOrszagok.length;i++){
    	document.write("<br>"+`${evesOrszagok[i].csatlakozasiEv} év ${evesOrszagok[i].orszagDarabszam} darab tagállam csatlakozásával zárult.`);
	}
}

StatisztikaKiiratas();
