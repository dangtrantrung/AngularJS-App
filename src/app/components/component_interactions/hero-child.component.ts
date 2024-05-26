import { Component, Input } from '@angular/core'
import { InHero } from 'app/in-hero'

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{ hero.name }} says:</h3>
    <p>I,{{ hero.name }} am at your service, {{ masterName }}</p>
  `,
})
export class HeroChildComponent {
  @Input() hero: InHero
  @Input('master') masterName = ''
}
