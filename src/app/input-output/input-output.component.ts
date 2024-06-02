import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() item: string
  @Output() deleteRequest = new EventEmitter<string>()
  lineThrough = ''
  delete() {
    console.warn(
      'Child says: emitting item deleteRequest @Output from child to parent with item...',
      this.item,
    )
    this.deleteRequest.emit(this.item)
    this.lineThrough = this.lineThrough ? '' : 'line-through'
  }
}
