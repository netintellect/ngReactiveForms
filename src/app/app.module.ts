import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeroDetailComponent} from "./heroes/hero-detail.component";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroService} from "./heroes/hero.service";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  exports: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
