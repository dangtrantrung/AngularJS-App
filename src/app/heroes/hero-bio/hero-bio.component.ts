import { Component, OnInit } from '@angular/core'
import { Logger } from 'app/logger.service'
import { HeroService } from '../hero.service'

@Component({
  // standalone: true,
  selector: 'app-hero-bios',
  template: `
    <app-hero-bio1 [heroId]="1"></app-hero-bio1>
    <app-hero-bio1 [heroId]="2"></app-hero-bio1>
    <app-hero-bio1 [heroId]="3"></app-hero-bio1>
  `,
  providers: [HeroService],
  // imports: [HeroBioComponent]
})
export class HeroBiosComponent {
  constructor(logger: Logger) {
    logger.log('Creating HeroBiosComponent')
  }
}
