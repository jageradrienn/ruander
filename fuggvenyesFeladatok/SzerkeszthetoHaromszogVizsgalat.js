<script>
let a=Number(prompt("Add meg az [a] oldal méretét"));
let b=Number(prompt("Add meg az [b] oldal méretét"));
let c=Number(prompt("Add meg az [c] oldal méretét"));
function SzerkeszthetoHaromszogVizsgalat(a,b,c){
if(a+b>c && b+c>a && a+c>b){
		document.write(`A ${a},${b},${c} oldalú háromszög megszerkeszthető`);
}
else{
		document.write(`A ${a},${b},${c} oldalú háromszög NEM szerkeszthető meg`);
}
}
SzerkeszthetoHaromszogVizsgalat(a,b,c);

</script>
