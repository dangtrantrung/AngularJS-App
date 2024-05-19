import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.')
    console.log('ngOnchanges triggered', changes)
    console.log(changes)
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Chiris') {
        this.userName = 'Hello ' + this.userName
      } else {
        this.userName = changes['userName'].previousValue
      }
    }
  }

  ngOnInit() {}
  @Input() userName = ''
}
