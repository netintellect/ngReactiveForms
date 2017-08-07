import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Hero} from "./models";
import {HeroService} from "./hero.service";
import 'rxjs/add/operator/finally';

@Component({
  moduleId: module.id,
  selector: "hero-list-component",
  templateUrl: "hero-list.component.html"
})

export class HeroListComponent implements OnInit {
  //#region state
  public heroes: Observable<Hero[]>;
  public isLoading: boolean = false;
  public selectedHero: Hero;
  //#endregion
  //#region behavior
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
    // Todo: error handling
      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  public select(hero: Hero): void
  {
    this.selectedHero = hero;
  }
  //#endregion
}
