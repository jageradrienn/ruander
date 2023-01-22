<script>
function KorSzamitas(){
	let radius=Number(prompt("Adja meg a kör sugarát"));
	let kerulet = radius*2*Math.PI;
	let terulet = radius*radius*Math.PI;
	return [kerulet,terulet];
}

let szamitas=KorSzamitas();

document.write("A kör kerülete: "+ szamitas[0]+"<br>");
document.write("A kör területe: "+ szamitas[1]);

</script>
