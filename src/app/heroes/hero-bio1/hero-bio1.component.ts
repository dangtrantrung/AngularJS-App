import { Component, Input, OnInit } from '@angular/core'
import { HeroCacheService } from '../hero-cache.service'
import { Hero } from '../hero-list/hero'

@Component({
  //standalone: true,
  selector: 'app-hero-bio1',
  template: `
    <h4>{{ hero.name }}</h4>
    <ng-content></ng-content>
    <textarea cols="25" [(ngModel)]="hero.description"></textarea>
  `,
  providers: [HeroCacheService],
  //imports: [FormsModule],
})
export class HeroBioComponent implements OnInit {
  @Input() heroId

  constructor(private heroCache: HeroCacheService) {}

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId)
  }

  get hero() {
    return this.heroCache.hero
  }
}
