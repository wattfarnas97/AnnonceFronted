import { CatalogueService } from './../catalogue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
categories;
mode="list";
  constructor(private catService:CatalogueService) { }

  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories(){
    this.catService.getAllCategories()
    .subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err);
    })
  }
  onDelete(c){
    let con=confirm("Etes vous sure de supprimer");
    if(con){

      this.catService.deleteRessources(c._links.self.href)
      .subscribe(data=>{
        this.getAllCategories();
      },err=>{
        console.log(err);
        
      });
    }
  }
  onNewCat(){
    if(this.mode=="list"){
      this.mode="new-cat"
    }
    else{
      this.mode="list" 
    }

  }
  onSubmit(data){
    let url=this.catService.host+"/categories";
    this.catService.postRessources(url,data)
    .subscribe(data=>{
      this.getAllCategories();
      this.mode="list";
    },err=>{
      console.log(err)
    })
  }
  currentCategorie;
  onEdit(c){

    this.catService.getRessources(c._links.self.href,)
    .subscribe(data=>{
     this.currentCategorie=data;
     this.mode="edit-cat";
    },err=>{
      console.log(err);
      
    });
  }
  onUpdate(data){
    let url=this.currentCategorie._links.self.href;
    this.catService.updateRessources(url,data)
    .subscribe(data=>{
      this.getAllCategories();
      this.mode="list";
    },err=>{
      console.log(err)
    })

  }  

  
  }


