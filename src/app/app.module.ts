import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component'
import { ComponentByManualComponent } from './component-by-manual/component-by-manual.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentByManualComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
