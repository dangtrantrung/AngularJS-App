import { Component, Directive, OnInit } from '@angular/core'
import { AdItem } from './dynamic-component-loader/ad-item'
import { AdService } from './dynamic-component-loader/ad.service'
import { Item } from './Item'

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

  // ads: AdItem[]
  // constructor(private adService: AdService) {}

  // ngOnInit() {
  //   this.ads = this.adService.getAds()
  // }
  // Interpolation
  titleInterpolation = 'Interpolation'
  currentCustomer = 'Maria'
  itemImageUrl = './assets/image.png'

  //Event binding & Template statement & Directive
  clickMessage = ''
  onSave(event?: MouseEvent) {
    const evtMsg = event
      ? 'Event target is ' + (event.target as HTMLElement).textContent
      : ''
    alert('Saved.' + evtMsg)
    if (event) {
      event.stopPropagation()
    }
  }

  currentItem1 = { name: 'teapot' }
  deleteItem(item: Item) {
    alert(`Delete the ${item.name}`)
  }
  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? 'Event target is: ' + (event.target as HTMLElement).className
      : ''
    alert('Clicked button. Classname of DOM element is: ' + evtMsg)
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
}
