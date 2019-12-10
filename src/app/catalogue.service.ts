import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string="http://localhost:8085"
  constructor(private http:HttpClient,private auth:AuthentificationService) {

   }
   getAllCategories(){
     return this.http.get(this.host+"/categories");
   }

   getRessources(url){
     return this.http.get(url);
   }
   deleteRessources(url){
     let headers=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt})
     return this.http.delete(url,{headers:headers});
   }
  postRessources(url,data){
    let headers=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt})
    return this.http.post(url,data,{headers:headers});
  }
  updateRessources(url,data){
    let headers=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt})
    return this.http.patch(url,data,{headers:headers});
  }
}
