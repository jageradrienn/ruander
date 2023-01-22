

<script>
//Tömböt generálni random számmal és fgv-ben kiíratni a tömböt.

let generaltSzamok=[];
for (let i=0;i<=10;i++){
	generaltSzamok.push(Math.round(Math.random()*100));
}

function TombKiiratas(generaltSzamokTomb){
	document.write("10 elemű random szám tömb:");
	for (let i=0;i<generaltSzamokTomb.length;i++){
    	document.write(generaltSzamokTomb[i]+",");
    }
}

TombKiiratas(generaltSzamok);
</script>

