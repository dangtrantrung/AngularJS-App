import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-item-output-parent',
  templateUrl: './item-output-parent.component.html',
  styleUrls: ['./item-output-parent.component.css'],
})
export class ItemOutputParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  items = ['item1', 'item2', 'item3', 'item4']

  addItem(newItem: string) {
    this.items.push(newItem)
  }
}
