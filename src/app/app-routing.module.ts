import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"annonces/:urlAnns",component:AnnonceComponent},
  {path:"login",component:LoginComponent},
  {path:"adminCategories",component:AdminCategoriesComponent},
  {path:"adminUsers",component:AdminUsersComponent},
  {path:"adminAnnonces",component:AdminAnnoncesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
