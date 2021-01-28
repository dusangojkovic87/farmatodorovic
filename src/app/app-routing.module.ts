import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"o nama",component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
