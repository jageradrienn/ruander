aktivalo.addEventListener("click", mindenCheck);
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

}

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

//dark/light ki/be kapcsolása egy gombra 
modes.addEventListener("click", () => {
    let tabla = document.querySelector("table");
    tabla.classList.toggle("table-dark");
    tabla.classList.toggle("table-light");
})

/*Ez egy kevésbé modern megoldás, de tökéletesen működik
modes.addEventListener("click", DarkLight);
 
function DarkLight() {
   let tabla = document.querySelector(".table-dark")
    if (tabla != null) {

        tabla.classList.remove("table-dark");
        tabla.classList.add("table-light");
    }
    else {
        tabla = document.querySelector("table"); 
        tabla.classList.remove("table-light");
        tabla.classList.add("table-dark");
    }
}
*/