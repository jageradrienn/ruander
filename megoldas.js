
document.write("1. feladat"+"<br>");
document.write("Jáger Adrienn"+"<br>");
document.write("Team11 Junior Frontend"+"<br>");
document.write("HTML:90"+"<br>");
document.write("CSS:90"+"<br>");
document.write("JavaScript:80"+"<br>");



document.write("<hr>");
document.write("2. feladat"+"<br>");
let hatvanyozandoSzam=prompt("Kérem adjon meg egy hatványozandó számot!");
let hatvany=prompt("Kérem adjon meg a hatvány mértékét!");
document.write(`A hatványozandó szám: ${hatvanyozandoSzam}<sup>${hatvany}</sup>`+"<br>");
document.write(`Az eredmény: ${Math.pow(hatvanyozandoSzam, hatvany)}`);
//vagy (hatvanyozandoSzam**hatvany)


document.write("<hr>");
document.write("3. feladat"+"<br>");
/* Ez az lett volna, hogy kiírja a páros számokat,de kapcsoltam ,hogy a feladatban generálni kellett egy számot.
De ez a kód kiírja az összes páros számot:

let alsoErtek=prompt("Kérem adja meg a tartomány alsó értékét!");
let felsoErtek=prompt("Kérem adja meg a tartomány felső értékét!");
if (felsoErtek<alsoErtek){
    let temp=alsoErtek;
    alsoErtek=felsoErtek;
    felsoErtek=temp;
}
document.write(`A páros számok ${alsoErtek} és ${felsoErtek} között: <br>`);

for (let i=alsoErtek;i<=felsoErtek;i++){
    if (i%2==0){
    document.write(`${i},`);
    }
}*/
let alsoErtek=prompt("Kérem adja meg a tartomány alsó értékét!");
let felsoErtek=prompt("Kérem adja meg a tartomány felső értékét!");
if (felsoErtek<alsoErtek){
    let temp=alsoErtek;
    alsoErtek=felsoErtek;
    felsoErtek=temp;
};
document.write(`A páros szám ${alsoErtek} és ${felsoErtek} között: <br>`);
document.write("A kigenerált páros szám:");
let parosSzam=0;
do{
parosSzam=Math.round(Math.random()*(felsoErtek-alsoErtek))+Number(alsoErtek);
}while(parosSzam%2!=0);
document.write(`${parosSzam}`);
/*Trükkösebb feladat, a leggyorsabb páros szám generáló megoldás, hogy egy számot generálunk.
Ha páros, kiírjuk, ha nem páros, akkor ha épp a max akkor levonunk egyet, különben hozzáadunk egyet. Így páros lesz.


*/


document.write("<hr>");
document.write("4. feladat"+"<br>");
let eletkor=prompt("Kérem adja meg az életkort!");
if(eletkor<0 || eletkor>120){
    document.write("Hibás adat!");
}
else if(eletkor<=6){
    document.write(`Az életkor ${eletkor}: Kisgyermekkor`);
}
else if(eletkor<=12){
    document.write(`Az életkor ${eletkor}: Gyermekkor`);
}
else if(eletkor<=16){
    document.write(`Az életkor ${eletkor}: Serdülőkor`);
}
else if(eletkor<=20){
    document.write(`Az életkor ${eletkor}: Ifjúkor`);
}
else if(eletkor<=30){
    document.write(`Az életkor ${eletkor}: Fiatal felnőtt kor`);
}
else if(eletkor<=60){
    document.write(`Az életkor ${eletkor}: Felnőtt kor`);
}
else{    
    document.write(`Az életkor ${eletkor}: Aggkor`);

}



document.write("<hr>");
document.write("5. feladat"+"<br>");
let vizsgaltSzam=prompt("Kérem adjon meg egy számot!");
let oszto=prompt("Kérem adjon meg egy osztó számot!");
if (vizsgaltSzam%oszto==00){
    document.write(`A(z) ${oszto} osztó OSZTJA maradék nélkül a ${vizsgaltSzam} számot!`);
}
else{
    document.write(`A(z) ${oszto} osztó NEM OSZTJA maradék nélkül a ${vizsgaltSzam} számot!`);
}



document.write("<hr>");
document.write("6. feladat"+"<br>");
document.write("Az első 10 négyzetszám:");
for(let i=1; i<=10;i++){
    document.write(`${i*i},`);
}