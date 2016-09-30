import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpModule }    from '@angular/http';

import {AppComponent} from './app.component';
import { HeroesComponent } from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { routing } from './app.routing';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule{

}
