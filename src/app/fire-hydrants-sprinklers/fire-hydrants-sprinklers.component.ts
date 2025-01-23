import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-hydrants-sprinklers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fire-hydrants-sprinklers.component.html',
  styleUrl: './fire-hydrants-sprinklers.component.css'
})
export class FireHydrantsSprinklersComponent {
    products = [
      {
        image: 'assets/image/istockphoto-94738262-612x612.jpg',
        title: 'Fire Hydrants',
        location: 'Bhandup West, Mumbai, Maharashtra',
        price: 4500,
      },
      {
        image: 'assets/image/istockphoto-1361818208-1024x1024.jpg',
        title: 'Mild Steel Fire Hydrants',
        location: 'Deals In Mumbai',
        price: 12000,
      },
      {
        image: 'assets/image/istockphoto-465261327-1024x1024.jpg',
        title: ' Double Fire Hydrants',
        location: 'Deals In Mumbai',
        price: 3300,
      },
      {
        image: 'assets/image/istockphoto-687687158-612x612.jpg',
        title: 'Fire Protection Hydrant System',
        location: 'Deals In Mumbai',
        price: 10500,
      },
      {
        image: 'assets/image/Types-of-Fire-Pumps.webp',
        title: 'Fire Hydrant Pumps',
        location: 'Deals In Mumbai',
        price: '5 Lakh',
      },
      {
        image: 'assets/image/img1.png',
        title: 'Fire Fighter Roller hose',
        location: 'Dahisar, Mumbai, Maharashtra',
        price: null,
      },
      {
        image: 'assets/image/istockphoto-1192341605-1024x1024.jpg',
        title: 'Fire Extinguisher',
        location: 'Mumbai, Maharashtra',
        price: 8200,
      },
      {
        image: 'assets/image/Fire-Sprinkler-System.jpg',
        title: 'Fire Hydrants And Sprinklers',
        location: 'Mahim West, Mumbai, Maharashtra',
        price: null,
      },
    ];
  }
  
