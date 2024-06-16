import { Injectable } from '@angular/core'
import { Hero } from 'app/heroes/hero-list/hero'
import { Logger } from 'app/logger.service'
import { BackendService } from 'app/backend.service'

@Injectable()
// declares that this service should be created
// by the root application injector.
//providedIn: 'root',
export class HeroService {
  private heroes: Hero[] = []

  constructor(private backend: BackendService, private logger: Logger) {}

  getHeroes() {
    this.backend.getAll(Hero).then((heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`)
      this.heroes.push(...heroes) // fill cache
    })
    return this.heroes
  }
  getHeroById(id: number) {
    return this.getHeroes().find((hero) => hero.id == id)
  }
}
