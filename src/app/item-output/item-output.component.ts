import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css'],
})
export class ItemOutputComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.')
  }
  @Output() newItemEvent = new EventEmitter<string>()

  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }
}
