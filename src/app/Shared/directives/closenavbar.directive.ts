import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appClosenavbar]'
})
export class ClosenavbarDirective {
  @Output() closeNavbar:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener("click")
  private onClick(){
     this.closeNavbar.emit(false);

  }

}
