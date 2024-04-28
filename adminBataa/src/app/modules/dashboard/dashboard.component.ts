import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/Services/categorie.service';
import { ProduitService } from 'src/Services/produit.service';
import { SouscategorieService } from 'src/Services/souscategorie.service';
import { UserService } from 'src/Services/user.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbuserEnAtt!: string;
  nbuserConf!: string;
  nbprodEnAtt!: string;
  nbprodconf!: string;
  nbvendeur!: number;
  nbsousCat!: string;
  nbCatArch!: string;
  nbCategiorieNONArch!: string;
  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  OnLoud3:boolean=false;
  OnLoud2:boolean=false;
  OnLoud4:boolean=false;
  OnLoud5:boolean=false;
  OnLoud6:boolean=false;
  OnLoud7:boolean=false;


  constructor(private UT : UserService,private UTT : UtilisateurService,private CT : CategorieService , private SCT : SouscategorieService , private PT : ProduitService) { }

  ngOnInit(): void {
    this.UT.OnGetCountUserNonValider().subscribe(data => {
      if(data===null)
      {
        this.nbuserEnAtt="0";
      }
      else{
        this.nbuserEnAtt=data;
      }
      console.log("prod ach non conf "+this.nbuserEnAtt);
      this.OnLoud=true;

    });
    this.UT.OnGetCountUserValider().subscribe(data => {
      if(data===null)
      {
        this.nbuserConf="0";
      }
      else{
        this.nbuserConf=data;
      }
      console.log("prod arch conf "+this.nbuserConf);
      this.OnLoud1=true;

    });
    this.PT.OnGetCountVendeurValider().subscribe(data => {

      this.nbvendeur=data;

      console.log("prod vedeur "+this.nbvendeur);
      this.OnLoud2=true;

    });
      // this.PT.OnGetVendeur().subscribe(data => {

      //   if(data===null)
      //       {
      //         this.nbvendeur="0";
      //       }
      //       else{
      //         this.nbvendeur=data.concat().toString();
      //       }
      //       console.log("prod vedeur "+this.nbvendeur);
      // });
    this.CT.OnGetCountCategorieArchiver().subscribe(data => {
      if(data===null)
      {
        this.nbCatArch="0";
      }
      else{
        this.nbCatArch=data;
      }
      console.log("prod cat arch "+this.nbCatArch);
      this.OnLoud3=true;

    });
    this.CT.OnGetCountCategorieValider().subscribe(data => {
      if(data===null)
      {
        this.nbCategiorieNONArch="0";
      }
      else{
        this.nbCategiorieNONArch=data;
      }
      console.log("prod cat conf "+this.nbCategiorieNONArch);
      this.OnLoud4=true;

    });
    this.SCT.OnGetCountSousCATValider().subscribe(data => {
      if(data===null)
      {
        this.nbsousCat="0";
      }
      else{
        this.nbsousCat=data;
      }
      console.log("prod sousCat "+this.nbsousCat);
      this.OnLoud5=true;

    });
    this.PT.OnGetCountProduitNonValider().subscribe(data => {
      if(data===null)
      {
        this.nbprodEnAtt="0";
      }
      else{
        this.nbprodEnAtt=data;
      }
      console.log("prod en att "+this.nbprodEnAtt);
      this.OnLoud6=true;

    });
    this.PT.OnGetCountProduitValider().subscribe(data => {
      if(data===null)
      {
        this.nbprodconf="0";
      }
      else{
        this.nbprodconf=data;
      }
      console.log("prodconf "+this.nbprodconf);
      this.OnLoud7=true;

    });
  }

}
