import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-systems',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './security-systems.component.html',
  styleUrl: './security-systems.component.css'
})
export class SecuritySystemsComponent {
constructor(private route:Router){

}
 products = [
    {
      name: 'Anti-Theft Mounting Kit',
      description: 'Secure your solar panels with advanced anti-theft mechanisms.',
      image: 'assets/sequreimg/istockphoto-1178913542-1024x1024.jpg',
    },
    {
      name: 'CCTV Surveillance Camera',
      description: 'Monitor your solar farm remotely with HD cameras.',
      image: 'assets/sequreimg/shopping.webp',
    },
    {
      name: 'Motion Detection Alarm',
      description: 'Detect and deter intruders with advanced motion sensors.',
      image: 'assets/sequreimg/51dIgkpvFbL._SL1100_.jpg',
    },
    {
      name: 'AI Threat Detector',
      description: 'Leverage AI to identify and alert potential threats.',
      image: 'assets/sequreimg/cyber-security-software-show-alert-cyber-attack-protection-snugly_31965-608999.jpg',
    },
  ];
Contacts:string="+917864565645"
  onInquire(Contacts: string) {
    alert(`Contact Us: ${Contacts}`);

  }

//   onInquire(){
//  this.route.navigateByUrl('/contact');

}

