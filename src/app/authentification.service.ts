import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  host2="http://localhost:8086";
  jwt:string
  username:string
  roles:Array<string>

  saveToken(jwt:string) {
    localStorage.setItem("token",jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  parseJWT() {
    let jwtHelper=new JwtHelperService();
    this.username=jwtHelper.decodeToken(this.jwt).obj;
    this.roles=jwtHelper.decodeToken(this.jwt).roles;
  }
isAdmin(){
  return this.roles.indexOf('ADMIN')>=0;
}
isUser(){
  return this.roles.indexOf('USER')>=0;
}
isAuthenticated(){
  return this.roles;
}
loadToken(){
  this.jwt=localStorage.getItem('token');

    this.parseJWT()
  
  
}
  constructor( private httpClient:HttpClient) { }
  login(data){
    return this.httpClient.post(this.host2+"/login",data,{observe:'response'})
  }
  logout(){
    localStorage.removeItem('token');
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;

  }
}
