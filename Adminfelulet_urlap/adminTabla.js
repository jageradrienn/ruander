/*aktivalo.addEventListener("click", mindenCheck);
function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }

}



deaktivalo.addEventListener("click", mindenUnCheck);
function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

csikozasbe.addEventListener("click", CsikozasBE);
function CsikozasBE() {
    let tabla = document.querySelector("table");
    tabla.classList.add("table-striped");
}


csikozaski.addEventListener("click", CsikozasKI);
function CsikozasKI() {
    let tabla = document.querySelector("table");
    tabla.classList.remove("table-striped");
}

darkMode.addEventListener("click", DarkMODEBE);
function DarkMODEBE() {
    let tabla = document.querySelector("table");
    tabla.classList.remove("table-light");
    tabla.classList.add("table-dark");
}

lightMode.addEventListener("click", LightMODEBE);
function LightMODEBE() {
    let tabla = document.querySelector("table");
    tabla.classList.remove("table-dark");
    tabla.classList.add("table-light");

}

tesztSor.addEventListener("click", TesztsorBeszuras);
function TesztsorBeszuras() {
    let tabla = document.querySelector("table");
    let sor = tabla.insertRow();
    let VezNevCella = sor.insertCell();
    let KerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    VezNevCella.innerHTML = "teszt";
    KerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type='checkbox' class='allapot'>";

}*/

//csikozás ki/be kapcsolása egy gombra 
//modern megoldűs
csikozasKiBe.addEventListener("click", () => {
    let tabla = document.querySelector("table");
    tabla.classList.toggle("table-striped");
})

// add-remove megoldás    
/*
csikozasKiBe.addEventListener("click", CsikozasONOFF);
    function CsikozasONOFF() {
    let tabla = document.querySelector("table-striped");
    if ( tabla!= null) {
        tabla.classList.remove("table-striped");
    }
    else {
        tabla = document.querySelector("table");
        tabla.classList.add("table-striped");
    }
}
*/

/* Vagy a contains-el, hogy tartalmaz-e egy adott osztályt:

if (tableObjektum.classList.contains("table-striped")) {
        tableObjektum.classList.remove("table-striped");
    }
    else {
        tableObjektum.classList.add("table-striped");
    }

*/

//inakt/deakt ki/be kapcsolása egy gombra 

aktdeakt.addEventListener("click", AktDeakt);
function AktDeakt() {

    let elemek = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemek.length; i++) {
        if (elemek[i].checked == true) {
            elemek[i].checked = false;
        }
        else {
            elemek[i].checked = true;
        }
    }
}

//Jquery-s megoldás:
/*
function check(){
    $.each($('.allapot'),function(index,value){
    $(this).prop('checked',!$(this).prop('checked'));
    });
    };
    */

//dark/light ki/be kapcsolása egy gombra 
modes.addEventListener("click", () => {
    let tabla = document.querySelector("table");
    tabla.classList.toggle("table-dark");
    tabla.classList.toggle("table-light");
})



/* Tanártól megoldás, amiben a body háttérszínét is, a gomb szövegét és színét is megváltoztatja

//darkMode.addEventListener("click",DarkMode);
function DarkMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-light");
    tableObjektum.classList.add("table-dark");
}

//lightMode.addEventListener("click",LightMode);
function LightMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-dark");
    tableObjektum.classList.add("table-light");
}

//Illetve a két "szín mód" gomb egy gombra való megírása

//Szorgalmi kezdete
darkLightMode.addEventListener("click", darkLightModeFolyamat);
function darkLightModeFolyamat(){
    let darkStance = document.querySelector("table").classList.contains("table-dark");
    let gomb=document.querySelector("#darkLightMode");
    if(darkStance==true){
        LightMode();
        document.body.style.backgroundImage="linear-gradient(to right, white, gray, white)";
        gomb.innerHTML="DarkModeON";
        gomb.classList.remove("btn-light");
        gomb.classList.add("btn-dark");
    }
    else{
        DarkMode();
        document.body.style.backgroundImage="linear-gradient(to right, black, gray, black)";
        gomb.innerHTML="LightModeON";
        gomb.classList.remove("btn-dark");
        gomb.classList.add("btn-light");
    }

    */
    tesztSor.addEventListener("click", TesztsorBeszuras);
    function TesztsorBeszuras() {
        let tabla = document.querySelector("table");
        let sor = tabla.insertRow();
        let VezNevCella = sor.insertCell();
        let KerNevCella = sor.insertCell();
        let emailCella = sor.insertCell();
        let telefonCella = sor.insertCell();
        let beosztasCella = sor.insertCell();
        let aktivalCella = sor.insertCell();
    
        VezNevCella.innerHTML = "teszt";
        KerNevCella.innerHTML = "teszt";
        emailCella.innerHTML = "teszt";
        telefonCella.innerHTML = "teszt";
        beosztasCella.innerHTML = "teszt";
        aktivalCella.innerHTML = "<input type='checkbox' class='allapot'>";
    
    }

    //Űrlap rész

    function vezNevCheck(){
        let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
        let ertek=document.querySelector("#vezNev").value;
        if (nevMinta.test(ertek)) {
            return true;
        }
        return false;
    }

    function kerNevCheck(){
        let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
        let ertek=document.querySelector("#kerNev").value;
        if (nevMinta.test(ertek)) {
            return true;
        }
        return false;
    }

    function emailCheck(){
        let emailMinta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
        let ertek=document.querySelector("#email").value;
        if (emailMinta.test(ertek)) {
            return true;
        }
        return false;
    }

    function telCheck(){
        let telMinta = /([0-9]{3})-([0-9]{4})$/;
        let ertek=document.querySelector("#tel").value;
        if (telMinta.test(ertek)) {
            return true;
        }
        return false;
    }

  

    function ujRegisztracio(){
        let tabla = document.querySelector("table");
        let sor = tabla.insertRow();
        let vezNevCella = sor.insertCell();
        let kerNevCella = sor.insertCell();
        let emailCella = sor.insertCell();
        let telefonCella = sor.insertCell();
        let beosztasCella = sor.insertCell();
        let aktivalCella = sor.insertCell();

        vezNevCella.innerHTML = document.querySelector("#vezNev").value;
        kerNevCella.innerHTML = document.querySelector("#kerNev").value;
        emailCella.innerHTML = document.querySelector("#email").value;
        telefonCella.innerHTML = document.querySelector("#tel").value;
        beosztasCella.innerHTML = document.querySelector("#beosztas").value;
        aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
    }

    

    adatokFel.addEventListener("click",AdatCheckEsFeltotles);
    function AdatCheckEsFeltotles(){
        let progress=document.querySelector("#progressMessage");
        let hibaUzenetVaz="Sikertelen adatfeltöltés:";
        if (vezNevCheck() &&  kerNevCheck() && emailCheck() && telCheck()){
            progress.innerHTML="Sikeres adatfeltöltés!"
            progress.classList.remove("alert-info");
            progress.classList.remove("alert-danger");
            progress.classList.add("alert-success");
            ujRegisztracio();
        }
        else {
            progress.classList.remove("alert-info");
            progress.classList.add("alert-danger");
            progress.classList.remove("alert-success");

            if(!vezNevCheck()){
                hibaUzenetVaz=+"Nem megfelelő vezetéknév! "     // Azért így, hogy ha több hiba is van, akkor összefűzi őket és csak a végén írja ki.
            }

            if(!kerNevCheck()){
                hibaUzenetVaz=+"Nem megfelelő keresztnév!"    
            }
            
            if(!emailCheck()){
                hibaUzenetVaz=+"Nem megfelelő e-mail cím!"    
            }

            if(!telCheck()){
                hibaUzenetVaz+="Hibás telefonszám! ";
            }
            progress.innerHTML=hibaUzenetVaz;

        }

        tel.addEventListener("input",kotojelBeilleszto);
        function kotojelBeilleszto(){
            let telefonMezo=document.querySelector("#tel").value;
            if(telefonMezo.length==3){
             document.querySelector("#tel").value=telefonMezo+"-";
             }
        }

    }