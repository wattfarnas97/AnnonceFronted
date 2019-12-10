import { CatalogueService } from './../catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private catService:CatalogueService,private router:Router) { }
categories;
annonces;
currentCategory;
  ngOnInit() {
 this.catService.getAllCategories()
    .subscribe(data=>{
      this.categories= data;
    },error=>{

    })
  }
  onGetAnnonces(c){
    this.currentCategory=c;
    let url=c._links.annonces.href;
   this.router.navigateByUrl("/annonces/"+btoa(url));
  }

}
