  import { CatalogueService } from './../catalogue.service';
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

  @Component({
    selector: 'app-annonce',
    templateUrl: './annonce.component.html',
    styleUrls: ['./annonce.component.css']
  })
  export class AnnonceComponent implements OnInit {
    annonces;

    constructor(private catService:CatalogueService,private router:Router,private route:ActivatedRoute ) {
     router.events.subscribe(event=>{
       if(event instanceof NavigationEnd){
        let url=atob(this.route.snapshot.params.urlAnns);
        this.getAnnonces(url);
       }
     })
     
    }

    ngOnInit() {

    }
    getAnnonces(url){
          this.catService.getRessources(url)
          .subscribe(data=>{
          this.annonces=data;
          },err=>{
          console.log(err);
          })
        }
  }
