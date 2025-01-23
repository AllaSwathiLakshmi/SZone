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
        image: 'https://via.placeholder.com/200x150?text=Fire+Hydrant+1',
        title: 'Fire Hydrants',
        location: 'Bhandup West, Mumbai, Maharashtra',
        price: 4500,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Hydrant+2',
        title: 'Mild Steel Fire Hydrants',
        location: 'Deals In Mumbai',
        price: 12000,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Hydrant+3',
        title: 'Fire Hydrants',
        location: 'Deals In Mumbai',
        price: 3300,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Protection',
        title: 'Fire Protection Hydrant System',
        location: 'Deals In Mumbai',
        price: 10500,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Hydrant+Pumps',
        title: 'Fire Hydrant Pumps',
        location: 'Deals In Mumbai',
        price: '5 Lakh',
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Hydrant+4',
        title: 'Fire Hydrants',
        location: 'Dahisar, Mumbai, Maharashtra',
        price: null,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Double+Fire+Hydrant',
        title: 'Double Fire Hydrants',
        location: 'Mumbai, Maharashtra',
        price: 8200,
      },
      {
        image: 'https://via.placeholder.com/200x150?text=Fire+Sprinkler',
        title: 'Fire Hydrants And Sprinklers',
        location: 'Mahim West, Mumbai, Maharashtra',
        price: null,
      },
    ];
  }
  
