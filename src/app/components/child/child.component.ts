import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.')
    console.log('OnInit child component triggerred')
  }
  constructor() {}
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.')
    console.log('AfterViewInit trigerred')
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.')
    console.log('AfterContentchecked trigerred')
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.')
    console.log('ngaftercontetnInit-wrapper', this.wrapper)
    console.log('ngaftercontetnInit-content wrapper', this.content)
  }
  @ViewChild('wrapper') wrapper: ElementRef
  @ContentChild('contentWrapper') content: ElementRef

  ngDoCheck(): void {
    // throw new Error('Method not implemented.')
    console.log(
      'doCheck triggered from child component, not onchange triggered - reference object value but still Do check',
    )
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
