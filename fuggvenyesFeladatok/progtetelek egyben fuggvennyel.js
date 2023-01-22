<script>
//20 elemű tömb 1-100-ig  randomszámmal generálása függvénnyel
function Tombgeneralasa(){
	let generaltRandomTomb=[];
	for (let i=0; i<=20;i++){
		generaltRandomTomb.push(Math.round(Math.random()*100));
	}
	return generaltRandomTomb;
}

//global scope-ú tömb létrehozása, amivel a tételekben dolgozunk majd.
let generaltRandomTomb=Tombgeneralasa();



//Generált tömb kiíratása függvénnyel

function GeneraltTombKiiratas(generaltRandomTomb){
	document.write("A tömb: ");
	for (let i=0;i<generaltRandomTomb.length;i++){
		document.write(generaltRandomTomb[i]+",");
	}
}

GeneraltTombKiiratas(generaltRandomTomb);

//Összegzés
document.write("<hr>Összegzés tétele függvénnyel generált tömbből: <br>");

function Osszegzes(generaltRandomTomb){
	let osszeg=0;
	for (let i=0;i<generaltRandomTomb.length;i++){
		osszeg+=generaltRandomTomb[i];
	}	
	document.write("A tömb elemeinek összege:"+osszeg);
	return osszeg;
}

Osszegzes(generaltRandomTomb);


//Átlagszámítás
document.write("<hr>Átlagszámítás tétele függvénnyel generált tömbből: <br>");

function Atlagszamitas(generaltRandomTomb){
	let osszeg=Osszegzes(generaltRandomTomb);
	let atlag=osszeg/generaltRandomTomb.length;
	document.write("A tömb elemeinek átalaga:"+atlag);	
}

Atlagszamitas(generaltRandomTomb);

//Megszámlálás tétele

document.write("<hr>Megszámlálás tétele páros számokra, kigyűjtése új tömbbe, függvénnyel generált tömbből: <br>");

function Megszamlalas(generaltRandomTomb){
	let parosSzamTomb=[];
	let parosSzamDarabszam=0;
	for (let i=0;i<generaltRandomTomb.length;i++){
		if (generaltRandomTomb[i]%2==0){
			parosSzamTomb.push(generaltRandomTomb[i]);
			parosSzamDarabszam++;
		}
	}
	document.write("A tömbben "+parosSzamDarabszam+" páros szám található.");
	GeneraltTombKiiratas(parosSzamTomb);
}

Megszamlalas(generaltRandomTomb);

//Minimum/Maximum keresés tétele kiválasztással
document.write("<hr>Minimum/Maximum keresés tétele függvénnyel generált tömbből: <br>");

function MinimumMaximumKereses(generaltRandomTomb){
	let minimumErtek=generaltRandomTomb[0];
    let maximumErtek=generaltRandomTomb[0];
	let minimumIndex=0;
    let maximumIndex=0;
	for (let i=1;i<generaltRandomTomb.length;i++){
		if(generaltRandomTomb[i]<minimumErtek){
			minimumErtek=generaltRandomTomb[i];
			minimumIndex=i;
		}
		else if(generaltRandomTomb[i]>maximumErtek){
			maximumErtek=generaltRandomTomb[i];
			maximumIndex=i;
		}
	}
	document.write(`A tömb minimum értéke: ${minimumErtek} és annak indexe: ${minimumIndex}`+"<br>");
	document.write(`A tömb maximum értéke: ${maximumErtek} és annak indexe: ${maximumIndex}`+"<br>");
}
MinimumMaximumKereses(generaltRandomTomb);

</script>
