import { Component } from '@angular/core'

@Component({
  //   standalone: true,
  selector: 'app-nav-bar',
  template: `
    <nav [style]="navStyle">
      <a [style.text-decoration]="activeLinkStyle">Home Page</a>
      <a [style.text-decoration]="linkStyle">Login</a>
    </nav>
    <div class="foo">
      <p [class.bar]="true">class binding</p>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class NavBarComponent {
  navStyle = 'font-size: 1.2rem; color: cornflowerblue;'
  linkStyle = 'underline'
  activeLinkStyle = 'overline'
  //   foo = 'color: blue;'
  //   bar = 'background-color: aqua;'

  /* . . . */
}
