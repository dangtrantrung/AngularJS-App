import {
  Component,
  DoCheck,
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
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  ngOnInit(): void {
    // throw new Error('Method not implemented.')
    console.log('OnInit child component triggerred')
  }
  constructor() {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.')
    console.log('doCheck triggered from child component')
  }
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

  // ngOnInit() {}

  @Input() userName = ''
}
