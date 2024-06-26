import { Component, Input, OnInit, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() size: number | string // size ! not null
  @Output() sizeChange = new EventEmitter<number>()

  dec() {
    this.resize(-1)
  }
  inc() {
    this.resize(+1)
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta))
    this.sizeChange.emit(this.size)
  }
}
