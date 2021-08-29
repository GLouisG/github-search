import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appUserDirective]'
})
export class UserDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.borderColor = "#3f704d"
    el.nativeElement.style.backgroundColor = "#262223"
    el.nativeElement.style.color = "#DDC6B6"
   }
}
