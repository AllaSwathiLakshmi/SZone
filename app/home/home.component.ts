import { CommonModule } from '@angular/common';
import { Component, Input, OnInit ,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit{
  @Input() slides: any[] = [];

  constructor() { }
  

  showImages: boolean = false;

  ngAfterViewInit() {
    // Delay the addition of the 'show' class to allow for the drop effect
    setTimeout(() => {
      this.showImages = true;
    }, 100); // Adjust delay as needed


// fade images 
    // const images = document.querySelectorAll('.section-image');
    // images.forEach(image => {
    //   image.classList.add('loaded');
    // });
  }
  ngOnInit(): void {
    // Initialization logic here
  }

 
}