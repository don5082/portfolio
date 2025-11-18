import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DevtagComponent } from './devtag/devtag.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PricingpageComponent } from './pricingpage/pricingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DevtagComponent,
    AboutpageComponent,
    PricingpageComponent,
    NavbarComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
