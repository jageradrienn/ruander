//Tömböt generálni random számmal és fgv-ben kiíratni a tömböt.
<script>


let generaltSzamok=[];
for (let i=0;i<=10;i++){
	generaltSzamok.push(Math.round(Math.random()*100));
}

function TombKiiratas(generaltSzamokTomb){
	for (let i=0;i<generaltSzamokTomb.length;i++){
    	document.write(generaltSzamokTomb[i]+"<br>");
    }
}

TombKiiratas(generaltSzamok);
</script>
