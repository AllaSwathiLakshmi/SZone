import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFocusout]',
  standalone: true
})
export class FocusoutDirective {

  constructor() { }

  @Output() focusOut: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: { closest: (arg0: string) => any; }) {
    const clickedInside = targetElement.closest('mat-menu');
    if (!clickedInside) {
      this.focusOut.emit();
    }
  }
}

