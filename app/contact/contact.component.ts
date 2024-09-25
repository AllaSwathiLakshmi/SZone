import { Component } from '@angular/core';
import { VerticalCardComponent } from '../vertical-card/vertical-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [VerticalCardComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  sections = [
    {
      title: 'Solar Solutions',
      description: 'Providing state-of-the-art solar panels and renewable energy solutions.',
      imageUrl: 'assets\image\images (3).jpeg' // Replace with your actual image path
    },
    {
      title: 'Fire Safety',
      description: 'Comprehensive fire safety systems and equipment for all environments.',
      imageUrl: 'assets\image\Fire-Sprinkler-System.jpeg' // Replace with your actual image path
    },
    {
      title: 'Electrical Services',
      description: 'Expert electrical installations and maintenance for residential and commercial needs.',
      imageUrl: 'src\assets\image\OIP (31).jpeg' // Replace with your actual image path
    },
    {
      title: 'Security Systems',
      description: 'Advanced security systems to protect your assets and ensure peace of mind.',
      imageUrl: 'assets/images/security.jpg' // Replace with your actual image path
    },
    {
      title: 'Networking Solutions',
      description: 'Reliable networking solutions for businesses of all sizes.',
      imageUrl: 'assets/images/networking.jpg' // Replace with your actual image path
    }
  ];
}