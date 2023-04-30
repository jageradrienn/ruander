function Rng(alsoHatar, felsoHatar) {
    if (alsoHatar > felsoHatar) {
        return (Math.round(Math.random()*(alsoHatar - felsoHatar)) + felsoHatar);
    }
    else {
        return (Math.round(Math.random()*(felsoHatar - alsoHatar)) + alsoHatar);
    }
}
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Rng(alsoHatar, felsoHatar));
    }
    return generaltTomb;
}
function Duplazo(vizsgaltTomb) {
    return vizsgaltTomb.map(function (item) { return item * 2; });
}
function PrimekSzama(vizsgaltTomb) {
    var primDb = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var lnko = 1;
        for (var j = 2; j < vizsgaltTomb[i]; j++) {
            ((vizsgaltTomb[i] % j) == 0) ? lnko++ : null
        }
        (lnko == 2) ? primDb++ : null;
    }
    return primDb;
}
function EgyediElemek(vizsgaltTomb) {
    var egyediTomb = [];
    vizsgaltTomb.forEach(function (item) {
        if (!egyediTomb.includes(item)) {
            egyediTomb.push(item);
        }
    });
    return egyediTomb;
}
