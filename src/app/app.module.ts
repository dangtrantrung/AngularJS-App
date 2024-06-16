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
import { HeroParentComponent } from './components/component_interactions/hero-parent.component'
import { HeroChildComponent } from './components/component_interactions/hero-child.component'
import { HomeComponent } from './components/home.component'
import { NameParentComponent } from './components/component_interactions/name-parent.component'
import { NameChildComponent } from './components/component_interactions/name-child.component'
import { HousingLocationComponent } from './housinglocation.component'
import { VersionParentComponent } from './components/component_interactions/implement Onchanges/version-parent.component'
import { VesrionChildComponent } from './components/component_interactions/implement Onchanges/version-child.component'
import { VoteTakerComponent } from './components/component_interactions/eventEmitter/vote-taker.component'
import { VoterComponent } from './components/component_interactions/eventEmitter/voter.component'
// import {
//   CountdownLocalVarParentComponent,
//   CountdownViewChildParentComponent,
// } from './components/component_interactions/countdown_timer/countdown-parent.component'
// import { CountdownTimerComponent } from './components/component_interactions/countdown_timer/countdown-timer.component'
// import { MissionControlComponent } from './components/component_interactions/observable service/missioncontrol.component'
// import { AstronautComponent } from './components/component_interactions/observable service/astronaut.component'
// import { MissionService } from './components/component_interactions/observable service/mission.service';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import { ItemOutputComponent } from './item-output/item-output.component'
import { ItemOutputParentComponent } from './item-output-parent/item-output-parent.component'
import { InputOutputComponent } from './input-output/input-output.component'
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component'
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component'
import { ExampleZippyComponent } from './example-zippy/example-zippy.component'
import { AdBannerComponent } from './dynamic-component-loader/ad-banner.component'
import { HeroJobAdComponent } from './dynamic-component-loader/hero-job-ad.component'
import { HeroProfileComponent } from './dynamic-component-loader/hero-profile.component'
import { AdService } from './dynamic-component-loader/ad.service'
import { AdDirective } from './dynamic-component-loader/ad.directive'
import { NavBarComponent } from './nav-bar.component'
import { AppNameComponent } from './name-collision.component'
import { AppBootstrapComponent } from './bootstrap.component';
import { SizerComponent } from './sizer/sizer.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { BirthdayFormattingComponent } from './birthday-formatting/birthday-formatting.component';
import { BirthdayPipeChainingComponent } from './birthday-pipe-chaining/birthday-pipe-chaining.component';
import { HighlightDirective } from './highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentByManualComponent,
    ParentComponent,
    ChildComponent,
    ViewEmulatedComponent,
    ViewNoneComponent,
    ViewNativeComponent,
    HeroParentComponent,
    HeroChildComponent,
    HomeComponent,
    NameParentComponent,
    NameChildComponent,
    HousingLocationComponent,
    VersionParentComponent,
    VesrionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    // CountdownTimerComponent,
    // CountdownLocalVarParentComponent,
    // CountdownViewChildParentComponent,
    // MissionControlComponent,
    // AstronautComponent,
    // MissionService,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemOutputParentComponent,
    InputOutputComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ExampleZippyComponent,
    // AdBannerComponent,
    // HeroJobAdComponent,
    // HeroProfileComponent,
    // AdDirective,
    NavBarComponent,
    AppNameComponent,
    AppBootstrapComponent,
    SizerComponent,
    PipeComponentComponent,
    BirthdayFormattingComponent,
    BirthdayPipeChainingComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  // #docregion entry-components
  // entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
