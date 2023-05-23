function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}


function teszt01() {
    try {
        let kulsoDiv = document.querySelector("body>div");
        if (kulsoDiv.classList.contains("container")) {
            ujVisszajelzoSor("Container osztály", "Megfelelő");
        }
        else {
            jVisszajelzoSor("Container osztály", "Nem megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Container osztály", "Hiba");
    }
}

function teszt02() {
    try {
        let h1Element = document.querySelector("h1");
        if (h1Element.innerHTML == "Tanfolyam regisztráció") {
            ujVisszajelzoSor("h1 cimsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("h1 cimsor tartalma", "Nem megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("h1 cimsor tartalma", "Hiba");
    }
}

function teszt03() {
    try {
        let inputs = document.querySelectorAll("input[class='form-group']");
        let inputsClassStatus = true;
        inputs.forEach(item => (item.classList.contains != "form-control") ? inputsClassStatus = false : null);
        if (inputsClassStatus == true) {
            ujVisszajelzoSor("Inputok form-control osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Inputok form-control osztálya", "Nem megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Inputok form-control osztálya", "Hiba");
    }
}

function teszt04() {
    const inputsObject = [
        { id: "veznev", type: "text" },
        { id: "kernev", type: "text" },
        { id: "fnev", type: "text" },
        { id: "pass1", type: "password" },
        { id: "pass2", type: "password" },
        { id: "email", type: "email" },
        { id: "tel", type: "tel" },

    ]
    try {
        let inputs = document.querySelectorAll("input[class='form-control']");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].getAttribute("id") == inputsObject[i].id && inputs[i].getAttribute("type") == inputsObject[i].type) {
                ujVisszajelzoSor(`${inputsObject[i].id} azonositoju input tipusa ${inputsObject[i].type}`, "Megfelelő");
            }
            else if (inputs[i].getAttribute("id") != inputsObject[i].id && inputs[i].getAttribute("type") == inputsObject[i].type) {
                ujVisszajelzoSor(`A(z) ${inputsObject[i].id} azonositoju input azonositoja `, "Nem megfelelő");
            }
            else if (inputs[i].getAttribute("id") == inputsObject[i].id && inputs[i].getAttribute("type") != inputsObject[i].type) {
                ujVisszajelzoSor(`A(z) ${inputsObject[i].id} azonositoju input tipusa `, "Nem megfelelő");
            }
            else {
                ujVisszajelzoSor(`A(z) ${inputsObject[i].id} azonositoju input azonositoja és tipusa `, "Nem megfelelő");
            }

        }
    }
    catch {
        ujVisszajelzoSor("Inputok azonositoja és tipusa", "Hiba");
    }
}

function teszt05() {
    try {
        let labels = document.querySelectorAll("label");
        let inputs = document.querySelectorAll("input[class='form-control']");
        labels.forEach((item, index) => {
            if (index < inputs.length) {
                let labelFor = item.getAttribute("for");
                let inputId = inputs[index].getAttribute("id");
                if (labelFor == inputId) {
                    ujVisszajelzoSor(`${labelFor} címkéjű label a(z) ${inputId} azonosítójú inputhoz`, "Megfelelő");
                }
                else {
                    ujVisszajelzoSor(`${labelFor} címkéjű label a(z) ${inputId} azonosítójú inputhoz`, "Nem megfelelő");
                }
            }
        })
    }
    catch {
        ujVisszajelzoSor("Labelek nem megfelelőek", "Hiba");
    }

}


function teszt06() {
    try {
        let smalls = document.querySelectorAll("small");
        let smallsClassStatus = true;
        for (let i = 0; i < smalls.length; i++) {
            if (!(smalls[i].classList.contains("form-text") && smalls[i].classList.contains("text-muted"))) { smallsClassStatus = false }
        }

        if (smallsClassStatus) {
            ujVisszajelzoSor("A small tagek form-text és text-muted osztálynevei", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A small tagek form-text és text-muted osztálynevei", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A small tagek form-text és text-muted osztálynevei", "Hiba");
    }
}


function teszt07() {
    try {
        let smalls = document.querySelectorAll("small");
        let smallsClassStatus = true;
            if (smalls[0].innerText=="Beceneve, mely mások számára is látható.") {
                ujVisszajelzoSor("A Felhasználói név alatti small tag tartalma", "Megfelelő");
            }
            else {
                ujVisszajelzoSor("A Felhasználói név alatti small tag tartalma", "Nem megfelelő");
            }


            if (smalls[1].innerText=="Ide továbbítjuk a legfontosabb tanfolyam információkat önnek.") {
                ujVisszajelzoSor("Az E-mail cím alatti small tag tartalma", "Megfelelő");
            }
            else {
                ujVisszajelzoSor("Az E-mail cím alatti small tag tartalma", "Nem megfelelő");
            }


            if (smalls[2].innerText=="Ha szeretne akár azonnal értesülni a fontosabb hírekről") {
                ujVisszajelzoSor("A Telefonszám alatti small tag tartalma", "Megfelelő");
            }
            else {
                ujVisszajelzoSor("A Telefonszám alatti small tag tartalma", "Nem megfelelő");
            }
    }
    catch {
        ujVisszajelzoSor("A small tagek tartalma", "Hiba");
    }
}

function teszt08() {
    try {
        let button = document.querySelector("button");
        if (button.classList.contains("btn")) {
            ujVisszajelzoSor("A gomb bootstrap osztályneve", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A gomb bootstrap osztályneve", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A gomb bootstrap osztályneve", "Hiba");
    }
}

function teszt09() {
    try {
        let button = document.querySelector("button");
        if (button.classList.contains("form-control")) {
            ujVisszajelzoSor("A gomb mérete", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A gomb mérete", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A gomb mérete", "Hiba");
    }
}

function teszt10() {
    try {
        let button = document.querySelector("button");
        if (button.classList.contains("btn-primary")) {
            ujVisszajelzoSor("A gomb színe", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A gomb színe", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A gomb színe", "Hiba");
    }
}

function teszt11() {
    try {
        let button = document.querySelector("button");
        if (button.innerText=="Regisztrálok") {
            ujVisszajelzoSor("A gomb tartalma", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A gomb tartalma", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A gomb tartalma", "Hiba");
    }
}

function teszt12() {
    try {
        let optionElements= document.querySelectorAll("option");
        if (optionElements.length=4) {
            ujVisszajelzoSor("A legördülő lista elemeinek száma", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A legördülő lista elemeinek száma", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A legördülő lista elemeinek száma", "Hiba");
    }
}

function teszt13() {
    try {
        let selectOption= document.querySelector("select option");
        if (selectOption.getAttribute("selected")=="selected") {
            ujVisszajelzoSor("A legördülő lista alapértelmezett eleme", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("A legördülő lista alapértelmezett eleme", "Nem megfelelő");
        }

    }

    catch {
        ujVisszajelzoSor("A legördülő lista alapértelmezett eleme", "Hiba");
    }
}

function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
}
allTeszt();
