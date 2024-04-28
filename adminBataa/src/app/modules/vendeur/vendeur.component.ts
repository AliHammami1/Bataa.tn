import { Component,OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import { ProduitService } from 'src/Services/produit.service';
import { Produit } from 'src/Modeles/Produit';

// export interface PeriodicElement {
//   id: number;
//   nom: string;
//   prenom: string;
//   ville: string;
//   adresse: string;
//   telephone: string;
//   action:string;
//   valide: string;
//   email:string;
//   mp:string;

// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, nom: 'Heni', prenom: 'Dammak', ville: 'sfax', adresse: 'Route gremda km 8', telephone: '21227774', action: '$3.9k' , valide: '1',email:'henidammak98@gmail.com',mp:'123456'},
//   { id: 2, nom: 'Ali ', prenom: 'Hammami',ville: 'sfax', adresse: "Route l'ain km 5,5", telephone: 'Medium', action: '$24.5k' ,valide: '1',email:'alihammami@gmail.com',mp:'123456'},
//   { id: 3, nom: 'yessin', prenom: 'Ayedi',ville: 'sfax', adresse: "Route lafrane km 5,5", telephone: 'High', action: '$12.8k' ,valide: '1',email:'yessinayedi@gmail.com',mp:'123456'},

// ];

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent implements OnInit {
  constructor(private _liveAnnouncer: LiveAnnouncer,private UTS:UtilisateurService,private PS:ProduitService){}
  datasource =new MatTableDataSource<Produit>();;
  displayedColumns: string[] = ['id','nom', 'prenom', 'ville', 'adresse','action'];
  OnLoud:boolean=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getUtilisateur();
  }

  getUtilisateur() {
    this.PS.OnGetVendeur().subscribe(data => {
      this.datasource = new MatTableDataSource<Produit>(data);
      console.log(data)
      this.OnLoud=true;
    });
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
