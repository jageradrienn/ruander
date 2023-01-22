let szamEgy=Number(prompt("Add meg az első számot:"));
let szamKetto=Number(prompt("Add meg a második számot:"));
let lnko=1;

function OsztoKereses(szam){
	for (let i=2;i<=szam;i++){
		if (szamEgy%i==0 && szamKetto%i==0) {
        	lnko=i;
        }    
    }
}

if (szamEgy<szamKetto){
	OsztoKereses(szamEgy);
}
else{
	OsztoKereses(szamKetto);
}

document.write(`A ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}`);