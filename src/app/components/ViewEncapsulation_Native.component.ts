import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-native',
  template:'<p>I am green paragraph encapsulation native and in green (ViewEncapsulation.Native)</p>',
  styles: ['p{color:green}'],
  encapsulation: ViewEncapsulation.Native,
})
export class ViewNativeComponent {}
