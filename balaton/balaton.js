class Hal {
    constructor(magyar, latin, egyeb, url, kep ) {
      this.fajMagyar = magyar;
      this.fajLatin = latin;
      this.egyebNevek = egyeb;
      this.wikiUrl = url;
      this.kepFajl = kep;
    }
  }

const halak = [];  
halak['balin'] = new Hal("Balin","Leuciscus aspius","fenekeszeg, kapókeszeg, őnhal, ragadozó őn, villámkeszeg","https://hu.wikipedia.org/wiki/Balin_(halfaj)","./halak/balin.jpg");
halak['bodorka'] = new Hal("Bodorka","Rutilus rutilus","búzaszemű keszeg","https://hu.wikipedia.org/wiki/Bodorka","./halak/bodorka.jpg");
halak['deverkeszeg'] = new Hal("Dévérkeszeg", "Abramis brama", null, "https://hu.wikipedia.org/wiki/Dévérkeszeg","./halak/deverkeszeg.jpg");
halak['karikakeszeg'] = new Hal("Kerikakeszeg","Blicca bjoerkna", null, "https://hu.wikipedia.org/wiki/Karikakeszeg","./halak/karikakeszeg.jpg");
halak['ponty'] = new Hal("Ponty","Cyprinus carpio","aranyhasú, babajkó, dunaponty, feketeponty, karcsúponty, nádiponty, nyurgaponty, pathal, potyka (= „pontyka”), nyurgaponty, pozsár, sodrófaponty","https://hu.wikipedia.org/wiki/Ponty","./halak/ponty.jpg");
halak['fogassullo'] = new Hal("Fogassüllő","Sander lucioperca","másfél kilósnál nagyobb példányok népies neve fogas, az ennél kisebbeké süllő","https://hu.wikipedia.org/wiki/Fogassüllő","./halak/fogassullo.jpg");
halak['csuka'] = new Hal("Csuka","Esox lucius","csukesz, közcsuka, mátyáscsuka (a Mátyás napján fogott példány), bicska, bugylicsuka","https://hu.wikipedia.org/wiki/Csuka","./halak/csuka.jpg");
halak['compo'] = new Hal("Compó","Tinca tinca","doktorhal, cigányhal","https://hu.wikipedia.org/wiki/Compó","./halak/compo.jpg");
halak['fejes'] = new Hal("Fejes domolykó","Squalius cephalus",null,"https://hu.wikipedia.org/wiki/Fejes_domolykó","./halak/fejes.jpg");
halak['garda'] = new Hal("Garda","Pelecus cultratus"," sugár kardos (némely forrásokban egybeírva), balatoni hering, kardkeszeg, karda, szabóhal, vezérgarda","https://hu.wikipedia.org/wiki/Garda_(halfaj)","./halak/garda.jpg");
halak['harcsa'] = new Hal("Európai harcsa","Silurus glanis", "harcsa, leső harcsa, pozsárharcsa, pumaharcsa, sárgaharcsa, tőkésharcsa, köves harcsa, sebes harcsa, szürke harcsa, szőke harcsa, parasztfaló, kupri, kupak, kuppancs","https://hu.wikipedia.org/wiki/Európai_harcsa","./halak/harcsa.jpg")

function halinfo(hal){
    document.getElementById('sugo').style.display='none';
    document.getElementById('halURL').href=halak[hal].wikiUrl;
    document.getElementById('halURL').alt=halak[hal].fajMagyar+" képe";
    document.getElementById('halURL').title=halak[hal].fajMagyar+" Wikipédia oldala";
    document.getElementById('halKep').src=halak[hal].kepFajl;
    document.getElementById('halNevek').innerHTML="<b>"+halak[hal].fajMagyar+" <i>("+halak[hal].fajLatin+")</i></b>";
    if(halak[hal].egyebNevek != null) {
        document.getElementById('halNevek').innerHTML+="<br>Egyéb elnevezés(ek):<br>"+halak[hal].egyebNevek;
    }
}
