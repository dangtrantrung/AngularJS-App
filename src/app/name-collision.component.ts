import { Component } from '@angular/core'
@Component({
  // standalone: true,
  selector: 'app-name-collision',
  template: `
    <div>
      <!-- Hello, Padma -->
      <h1>Hello, {{ customer }}</h1>
      <ul>
        <!-- Ebony and Chiho in a list-->
        <li *ngFor="let customer of customers">{{ customer.value }}</li>
      </ul>
      <!-- <button type="button" [disabled]="isUnchanged" (click)="setState()"> -->
      <button type="button" (click)="setState()">
        Disabled Button
      </button>
      <p>{{ isUnchanged }}</p>
    </div>
  `,
  // imports: [NgFor]
})
export class AppNameComponent {
  customers = [{ value: 'Ebony' }, { value: 'Chiho' }]
  customer = 'Padma'
  isUnchanged = false
  setState() {
    this.isUnchanged = this.isUnchanged ? false : true
  }
}
