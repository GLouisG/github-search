import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appRepoDirective]'
})
export class RepoDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.borderColor = "#3f704d"
    el.nativeElement.style.backgroundColor = "#317773"
    el.nativeElement.style.color = "#E2D1F9"
   }

}
