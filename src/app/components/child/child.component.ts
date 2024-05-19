import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
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
    AfterViewInit,
    OnDestroy,
    AfterViewChecked {
  // ngOnInit() {}
  constructor() {}

  @Input() userName = ''
  @ViewChild('wrapper') wrapper: ElementRef
  @ContentChild('contentWrapper') content: ElementRef

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
  ngOnInit(): void {
    // throw new Error('Method not implemented.')
    console.log('OnInit child component triggerred')
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.')
    console.log(
      'doCheck triggered from child component, not onchange triggered - reference object value but still Do check',
    )
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.')
    console.log('ngaftercontetnInit-wrapper', this.wrapper)
    console.log('ngaftercontetnInit-content wrapper', this.content)
  }

  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.')
    console.log('AfterContentchecked trigerred')
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.')
    console.log('AfterViewInit trigerred')
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.')
    console.log('AfterViewChecked trigerred')
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.')
    console.log('Child component is destroyed!')
  }
}
