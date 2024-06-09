import { Component } from '@angular/core'
@Component({
  // standalone: true,
  selector: 'app-bootstrap',
  template: `
    <div class="container">
      <h1>Install Bootstrap 5 in Angular</h1>

      <div class="card">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            href="https://v17.angular.io/guide/property-binding"
            class="btn btn-primary"
          >
            Go property-binding
          </a>
          <a
            href="https://v17.angular.io/guide/two-way-binding"
            class="btn btn-danger"
          >
            Go two-way-binding
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  // imports: [NgFor]
})
export class AppBootstrapComponent {}
