import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.')
    console.log('OnInit parent component triggerred')
  }
  // constructor() { }

  // ngOnInit() {
  // }
  userName = 'Maria'
  updateUser() {
    this.userName = 'Chiris'
  }
}
