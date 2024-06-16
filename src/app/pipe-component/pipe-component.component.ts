import { Component } from '@angular/core'
import { DatePipe } from '@angular/common'

@Component({
  //standalone: true,
  selector: 'app-birthday',
  templateUrl: './pipe-component.component.html',
  // imports: [DatePipe],
})
export class PipeComponentComponent {
  birthday = new Date(1988, 3, 15) // April 15, 1988 -- since month parameter is zero-based
}
