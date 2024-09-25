import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, RouterModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('productsMenuTrigger') productsMenuTrigger!: MatMenuTrigger;
  @ViewChild('productsMenu') productsMenu!: ElementRef;

constructor(private router:Router){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      this.closeMenu();
    }
  })
}
  closeMenu() {
    if(this.productsMenuTrigger){
      this.productsMenuTrigger.closeMenu();
    }
  }


  onFocusChange(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Check if the focus is moving outside the menu and trigger button
    if (!relatedTarget || !this.productsMenu.nativeElement.contains(relatedTarget)) {
      this.productsMenuTrigger.closeMenu();
    }
  }

  // onFocusOutEvent(event: FocusEvent) {
  //   const relatedTarget = event.relatedTarget as HTMLElement;
  //   // Check if the related target is outside the menu and trigger button
  //   if (!relatedTarget || !relatedTarget.closest('.mat-menu-trigger, mat-menu')) {
  //     this.closeMenu(this.productsMenuTrigger);
  //   }
  // }
}
