<script>
let eletkor=Number(prompt("Kérem adja meg az életkort!"));

function EletkorVizsgalat(eletkor){

if(eletkor<0 || eletkor>120){
    document.write("Hibás adat!");
}
else if(eletkor<=6){
    document.write(`Az életkorod ${eletkor}: Kisgyermekkor`);
}
else if(eletkor<=12){
    document.write(`Az életkorod ${eletkor}: Gyermekkor`);
}
else if(eletkor<=16){
    document.write(`Az életkorod ${eletkor}: Serdülőkor`);
}
else if(eletkor<=20){
    document.write(`Az életkorod ${eletkor}: Ifjúkor`);
}
else if(eletkor<=30){
    document.write(`Az életkorod ${eletkor}: Fiatal felnőtt kor`);
}
else if(eletkor<=60){
    document.write(`Az életkorod ${eletkor}: Felnőtt kor`);
}
else{    
    document.write(`Az életkorod ${eletkor}: Aggkor`);

}
}

EletkorVizsgalat(eletkor);
</script>