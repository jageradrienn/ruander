function PhErtek(vizsgaltErtek :number):string{
    if (vizsgaltErtek == 7) { return 'semleges'}
    else if (vizsgaltErtek < 7) {return 'savas'}
    else {return 'lugos'}
}


function PrimekSzama(vizsgaltTomb:number[]):number{
    var primDb:number=0;
    for (var i:number=0;i<vizsgaltTomb.length;i++){
        var oszto:number=1;
        for (var j:number=2;j<=vizsgaltTomb[i];j++) {
            ((vizsgaltTomb[i] % j) == 0) ? oszto++ : null
        }
        (oszto==2)? primDb++ : null;
    }
    return primDb
}


function MaganHangzokSzama(vizsgaltSzoveg:string):number{
    var MaganHangzok:string="aAáÁeEéÉiIíÍuUüÜöÖoOóÓúÚűŰ";
    var mhDb:number=0;
    for (let i:number=0;i<vizsgaltSzoveg.length;i++){ 
       (MaganHangzok.includes(vizsgaltSzoveg[i])) ? mhDb++ : null
    }
    return mhDb;
}
