<script>
// Ömlesztett tömbből, objektummá szét split-elni és új adatszerkezetet létrehozni.
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];


function AdatDarabolo(feltoltendoElem){
	let csapatAdatTablazatObjektum=[];
	for (let i=0;i<feltoltendoElem.length;i++){
		let beolvasottAdatok={};
		let darabolandoAdatok=feltoltendoElem[i].split(";");
		beolvasottAdatok.nev=darabolandoAdatok[0];
		beolvasottAdatok.helyezes=darabolandoAdatok[1];
		beolvasottAdatok.valtozas=darabolandoAdatok[2];
		beolvasottAdatok.pontszam=darabolandoAdatok[3];
    	csapatAdatTablazatObjektum.push(beolvasottAdatok);
	}
    return csapatAdatTablazatObjektum;
}

let fifaAdatok=AdatDarabolo(csapatAdat);

//Táblázat kiiratása

function TablaKiiro(fifaAdatok){
	document.write("<table border=\"1\">");
	document.write("<tr><th>Név</th><th>Helyezés</th><th>Változás</th><th>Pontszám</th></tr>");
		for(let i=0;i<fifaAdatok.length;i++){
			document.write(`<tr><td>${fifaAdatok[i].nev}</td><td>${fifaAdatok[i].helyezes}</td><td>${fifaAdatok[i].valtozas}</td><td>${fifaAdatok[i].pontszam}</td></tr>`);
		}
	document.write("</table>");
}

TablaKiiro(fifaAdatok);

//Adja meg aktuálisan hány csapat szerepel a ranglistán 

function CsapatokSzamaRanglistan(){
	let csapatSzam=0;
	for (let key in fifaAdatok) {
		if (fifaAdatok.hasOwnProperty(key)){
			csapatSzam++;
		}
	}
	return csapatSzam;
}

document.write("<br>"+`A csapat ranglétrán ${CsapatokSzamaRanglistan()} csapat szerepel.`);


//Írja ki mennyi a résztvevő csapatok átlagpontszáma

function CsapatokAtlagPontszama(){
	let osszPontSzam=0;
	for (let i=0;i<fifaAdatok.length;i++) {  //Mert tömbről van szó, nem kell a for in...
		if (fifaAdatok[i].hasOwnProperty('pontszam')){
			osszPontSzam+=Number(fifaAdatok[i].pontszam); // Számmá kell alakítani, különben összefúz stringgé
		}
	}
	let atlagPontSzam=parseInt(osszPontSzam/CsapatokSzamaRanglistan());
	return atlagPontSzam;
}

document.write("<br>"+`A csapatok átlagpontszáma ${CsapatokAtlagPontszama()}.`);


//Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!


function AtlagFelettiCsapatokKeresese(atlagPontSzam){
	let atlagFelettiek=new Array();
	for (let i=0;i<fifaAdatok.length;i++) {
    	let atlagFelettiAdatSor= new Object();
		if (fifaAdatok[i].pontszam>atlagPontSzam){
			atlagFelettiAdatSor.nev=fifaAdatok[i].nev;
			atlagFelettiAdatSor.pontszam=fifaAdatok[i].pontszam;
            atlagFelettiek.push(atlagFelettiAdatSor);
    	}
	}     
	return atlagFelettiek;
}

let atlagFelettiCsapatokObj = AtlagFelettiCsapatokKeresese( CsapatokAtlagPontszama() );
document.write("<table border=\"1\">");
document.write("<tr><th>Név</th><th>Pontszám</th></tr>");
for (let i=0;i<atlagFelettiCsapatokObj.length;i++){
		document.write(`<tr><td>${atlagFelettiCsapatokObj[i].nev}</td><td>${atlagFelettiCsapatokObj[i].pontszam}</td></tr>`);
}
document.write("</table>");

</script>
