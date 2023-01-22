<script>
let generaltSzam=Math.round(Math.random()*100);//0 és 100 közötti egész érték
function ParosParatlanVizsgalat(generaltSzam){
if(generaltSzam%2==0){
	document.write(`A ${generaltSzam} szám páros`);
}
else{
	document.write(`A ${generaltSzam} szám páratlan`);
}
}
ParosParatlanVizsgalat(generaltSzam);
</script>
