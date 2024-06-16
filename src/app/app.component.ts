import { Component, Directive, OnInit } from '@angular/core'
import { AdItem } from './dynamic-component-loader/ad-item'
import { AdService } from './dynamic-component-loader/ad.service'
import { Item } from './Item'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

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
  ngOnInit() {
    this.setCurrentClasses()
    this.setCurrentStyles()
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
    alert('Button Clicked! Classname of this DOM element is: ' + evtMsg)
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
  // Two-way binding
  title1 = 'Two-way binding'
  fontSizePx = 16

  callPhone(phone1: number) {
    console.warn(`call to phone number ${phone1}`)
  }
  // Built-in directives
  isSpecial = true
  canSave = false
  isUnchanged = false
  currentClasses = {}
  /* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: !this.isSpecial,
    }
  }
  currentStyles = {}
  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '46px' : '12px',
    }
  }
}
