import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavigationLinksComponent } from './Shared/navigation-links/navigation-links.component';
import { CardComponent } from './Pages/home/card/card.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { OurGoalsCardComponent } from './Pages/about-us/our-goals-card/our-goals-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationLinksComponent,
    CardComponent,
    FooterComponent,
    AboutUsComponent,
    OurGoalsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
