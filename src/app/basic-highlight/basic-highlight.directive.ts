import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef) { }

  //we are changing the style of the element that the directive was placed on
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor="green";
  }
}
