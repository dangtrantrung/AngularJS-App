import { Component, OnInit } from '@angular/core'
import { AdItem } from './dynamic-component-loader/ad-item'
import { AdService } from './dynamic-component-loader/ad.service'

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
}
