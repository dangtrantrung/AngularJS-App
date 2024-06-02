import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!'
  currentItem = 'Televisison item input from parent to child'
  items = ['item1', 'item2', 'item3', 'item4']

  addItem(newItem: string) {
    this.items.push(newItem)
  }
  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}`)
  }
}
