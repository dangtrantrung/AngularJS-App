import { Component } from '@angular/core'
import { VoterComponent } from './voter.component'

@Component({
  selector: 'vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
    <voter *ngFor="let voter of voters" (onVoted)="onVoted($event)"></voter>
  `,
})

//[name]="voter"
export class VoteTakerComponent {
  agreed = 0
  disagreed = 0
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto']
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++
  }
}
