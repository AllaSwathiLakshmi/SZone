import { AfterViewInit, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatCardModule ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit {

  images = [
    { url: 'assets\image\images (4).jpeg', title: 'Image 1' },
    { url: 'assets/image2.jpg', title: 'Image 2' },
    { url: 'assets/image3.jpg', title: 'Image 3' },
    { url: 'assets/image4.jpg', title: 'Image 4' },
    // Add more images as needed
  ];

  ngAfterViewInit(): void {
    const images = document.querySelectorAll('.section-image');
    images.forEach(image => {
      image.classList.add('loaded');
    });
  }
}
