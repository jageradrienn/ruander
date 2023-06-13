import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  ngOnInit():void{

    $(document).ready(function(){


      $("button").click(function( ){
        let szam:number=$("prim").val;

       Eredmeny(PrimEllenorzes(szam));
        TombFeltolt(szam);
      })

      function PrimEllenorzes(vizsgaltSzam:number):boolean{
        var oszto: number = 1;
        for (let i: number = 2; i <= vizsgaltSzam; i++) {
            (vizsgaltSzam % i == 0) ? oszto++ : null
        }

        if (oszto == 2) {
            return true;
        }
        else {
            return false;
        }

      }
      var szoveg:string="";
      function Eredmeny(eredmeny:boolean):void{

        szoveg= (eredmeny) ? "A szám prim" : " A szám nem prim!"
      }

      let SzamokTombje:number[]=[];

      function TombFeltolt(szam:number):void{
        SzamokTombje.push(szam);
      }
    });


  }


  }


