import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ChickeneggsComponent } from './Pages/eggs/chickeneggs/chickeneggs.component';
import { EggsComponent } from './Pages/eggs/eggs.component';
import { QuaileggsComponent } from './Pages/eggs/quaileggs/quaileggs.component';
import { HomeComponent } from './Pages/home/home.component';
import { ManualComponent } from './Pages/manual/manual.component';

const routes: Routes = [
  {path:"",redirectTo:"/pocetna",pathMatch:'full'},
  {path:"pocetna",component:HomeComponent},
  {path:"onama",component:AboutUsComponent}  ,
  {path:"jaja",component:EggsComponent,children:[
    {path:"",redirectTo:"prepelicija",pathMatch:'full'},
    {path:"prepelicija",component:QuaileggsComponent},
    {path:"kokosija",component:ChickeneggsComponent}
  ]},
  {path:"uputstvo",component:ManualComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
