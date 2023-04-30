function Rng(alsoHatar: number, felsoHatar: number): number {
    if (alsoHatar > felsoHatar) {
        return (Math.round(Math.random()*(alsoHatar - felsoHatar)) + felsoHatar);
    }
    else {
        return (Math.round(Math.random()*(felsoHatar - alsoHatar)) + alsoHatar);
    }
}

function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): number[] {
    var generaltTomb:number[]=[];
    for (var i: number = 0; i < meret; i++) {
        generaltTomb.push(Rng(alsoHatar, felsoHatar))
    }
    return generaltTomb;
}

function Duplazo(vizsgaltTomb:number[]):number[]{
    return vizsgaltTomb.map( item => item*2 )
}

function PrimekSzama(vizsgaltTomb:number[]):number{
    var primDb:number=0;
    for (var i:number=0;i<vizsgaltTomb.length;i++){
        var lnko:number=1;
        for (var j:number=2;j<vizsgaltTomb[i];j++) {
            ((vizsgaltTomb[i] % j) == 0) ? lnko++ : null
        }
        (lnko==2)? primDb++ : null;
    }
    return primDb
}

function EgyediElemek(vizsgaltTomb:number[]):number[]{
    var egyediTomb:number[]=[];
    vizsgaltTomb.forEach( (item) => {
        if (!egyediTomb.includes(item)) {
            egyediTomb.push(item);
          }
    })
    return egyediTomb;
}

