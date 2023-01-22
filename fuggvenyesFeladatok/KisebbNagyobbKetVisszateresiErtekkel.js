<script>


function VeletlenSzamGeneralo(){
	let generaltSzam1=Math.round(Math.random()*10);//0 és 10 közötti egész érték
	let generaltSzam2=Math.round(Math.random()*10);//0 és 10 közötti egész érték
	return [generaltSzam1,generaltSzam2];
}

function GeneraltVizsgalat(){
let generaltSzam= VeletlenSzamGeneralo();
	if(generaltSzam[0]>generaltSzam[1]){
		document.write(`A ${generaltSzam[0]} szám nagyobb mint a ${generaltSzam[1]} szám`);
	}
	else if(generaltSzam[0]<generaltSzam[1]){
		document.write(`A ${generaltSzam[0]} szám kisebb mint a ${generaltSzam[1]} szám`);
	}
	else {
		document.write(`A ${generaltSzam[0]} szám és a ${generaltSzam[1]} szám egyenlő`);
	}
}

GeneraltVizsgalat();

</script>
