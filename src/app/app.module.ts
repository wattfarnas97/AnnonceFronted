import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import{FormsModule} from'@angular/forms'
import { from } from 'rxjs';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    AnnonceComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminAnnoncesComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
