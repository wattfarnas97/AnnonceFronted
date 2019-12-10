import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.authServic.loadToken();
  }
  title = 'AnnonceFrontend';
  constructor(private authServic:AuthentificationService){}

  isAdmin(){
    return this.authServic.isAdmin();
  }
  isUser(){
    return this.authServic.isUser();
  }
  isAuthenticated(){
    return this.authServic.isAuthenticated();
  }
  logout(){
    this.authServic.logout();
  }
}
