import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component'
import { ComponentByManualComponent } from './component-by-manual/component-by-manual.component'
import { ParentComponent } from './components/parent/parent.component'
import { ChildComponent } from './components/child/child.component'
import { ViewEmulatedComponent } from './components/ViewEncapsulation_Emulated.component'
import { ViewNoneComponent } from './components/ViewEncapsulation_None.component'
import { ViewNativeComponent } from './components/ViewEncapsulation_Native.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentByManualComponent,
    ParentComponent,
    ChildComponent,
    ViewEmulatedComponent,
    ViewNoneComponent,
    ViewNativeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
