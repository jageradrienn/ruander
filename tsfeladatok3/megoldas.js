function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek == 7) {
        return 'semleges';
    }
    else if (vizsgaltErtek < 7) {
        return 'savas';
    }
    else {
        return 'lugos';
    }
}

function PrimekSzama(vizsgaltTomb) {
    var primDb = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var oszto = 1;
        for (var j = 2; j <= vizsgaltTomb[i]; j++) {
            ((vizsgaltTomb[i] % j) == 0) ? oszto++ : null;
        }
        (oszto == 2) ? primDb++ : null;
    }
    return primDb;
}

function MaganHangzokSzama(vizsgaltSzoveg) {
    var MaganHangzok = "aAáÁeEéÉiIíÍuUüÜöÖoOóÓúÚűŰ";
    var mhDb = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        (MaganHangzok.includes(vizsgaltSzoveg[i])) ? mhDb++ : null;
    }
    return mhDb;
}
