import {
  Component,
  ContentChild,
  Directive,
  OnInit,
  TemplateRef,
} from '@angular/core'

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.component.html',
  styleUrls: ['./example-zippy.component.css'],
})
export class ExampleZippyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
// @Directive({
//   selector: '[appExampleZippyContent]',
// })
// export class ZippyContentDirective {
//   constructor(public templateRef: TemplateRef<unknown>) {}
// }
// @ContentChild(ZippyContentDirective) content: ZippyContentDirective;
