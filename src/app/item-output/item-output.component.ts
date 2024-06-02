import { Component, OnInit, Output } from '@angular/core'
import { EventEmitter } from 'events'

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css'],
})
export class ItemOutputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter()
  constructor() {}

  ngOnInit() {}
  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }
}
