import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color='red';
  }
  @HostListener('mouseenter') OnMouseEnter(){
    this.el.nativeElement.style.color='black';
  }
  @HostListener('mouseleave') OnMouseLeave(){
    this.el.nativeElement.style.color='purple';
  }



}
