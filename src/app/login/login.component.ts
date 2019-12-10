import { RouterModule, Router } from '@angular/router';
import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(v){
    this.authService.login(v)
    .subscribe(data=>{
let jwt=data.headers.get('Authorization');
this.authService.saveToken(jwt);

this.router.navigateByUrl("/");
    },err=>{

    })
  }
  
}
