import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [MatCardModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './networking.component.html',
  styleUrl: './networking.component.css'
})
export class NetworkingComponent {
  systems = [
    {
      title: "CLOSED CIRCUIT TV SYSTEMS",
      image: "https://media.istockphoto.com/id/482112104/photo/security-cctv-camera-in-office-building.jpg?s=612x612&w=0&k=20&c=vT86olucO-hgeIZ1zV1Lx97X_54h7dzx2yJ8LRSo7IM=",
      description: [
        "Our company designs integrated systems for projects taking into account all the requirements envisaged by the customer. Large and small projects are designed by considering the operating scenarios provided by the customer and the risk analysis carried out by the engineers of our company to provide optimum equipment configuration.",
        "Closed Circuit TV Systems installed for security purposes are normally used to manage the movement of people around the areas to be protected. The videos captured by these cameras are stored either digitally or conventionally. The digitally stored videos can be accessed from a remote location."
      ]
    },
    {
      title: "ACCESS CONTROL SYSTEMS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAbezlurDAkXh2MouWNB0t8uQVBdwTHX7yKNLisFzzbYsYzi7JwfcApwx9PX9A7eudBM&usqp=CAU",
      description: [
        "Access Control Systems are designed to manage the entry and exit of individuals in a secure environment. These systems ensure that only authorized persons are allowed to access restricted areas, enhancing security in sensitive zones.",
        "Our solutions offer a variety of technologies including biometric systems, card-based entry systems, and cloud-based solutions, all of which can be tailored to meet specific customer requirements. These systems provide a seamless way to monitor and control access to facilities."
      ]
    },
    {
      title: "BIOMETRIC HAND & FINGERPRINT IDENTITY",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0_veaUwtMS0fMDx3RS3xaesM3Q--zMRpZZmhOObF4iPHCgkJf8fNkdQk0qpNBrfGQNk&usqp=CAU",
      description: [
        "Biometric systems for hand and fingerprint identity verification offer enhanced security for access control, ensuring that only authorized individuals can gain entry based on their unique biometric traits.",
        "These systems can be used in high-security environments, providing quick and accurate identification, reducing the need for physical credentials like cards or keys."
      ]
    },
    {
      title: "INTERCOM & VIDEO INTERCOM SYSTEMS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8Jb1u3RNJTZgkUkMH9mSgbEeYIp2UYIjoA&s",
      description: [
        "Intercom and video intercom systems provide seamless communication between different locations within a building or across campuses. These systems allow for both audio and video communication to ensure secure, two-way conversations.",
        "Our systems can be customized for residential, commercial, and industrial applications, supporting integration with security features like access control and alarm systems."
      ]
    },
    {
      title: "PUBLIC ADDRESS SYSTEMS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-Q2_3cLd1P891WUEWlLQPEu5xRVhKLRYXQ&s",
      description: [
        "Public Address Systems are designed to amplify sound in large spaces such as auditoriums, stadiums, or public events. These systems ensure that announcements, speeches, and music can be heard clearly by large audiences.",
        "Our PA systems include microphones, speakers, amplifiers, and controls, providing tailored solutions for any environment, whether it's a corporate event, concert, or public emergency notification."
      ]
    },
    {
      title: "FIRE ALARM SYSTEMS",
      image: "https://media.geesysindia.com/security-automations/images/fire-alarm-panels-geesys.jpg",
      description: [
        "Fire Alarm Systems are essential for early detection of fires, helping to protect lives and property. These systems use smoke, heat, or flame detectors to identify potential fire hazards and immediately trigger alarms.",
        "Our solutions integrate with sprinklers and emergency systems to ensure a coordinated response, providing peace of mind for residential, commercial, and industrial environments."
      ]
    },
    {
      title: "INTRUSION DETECTION SYSTEMS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDltzzMcyRWGKZfny8Y66pPyE30iafa0k0eA&s",
      description: [
        "Intrusion Detection Systems are designed to identify unauthorized access or breaches in protected areas. These systems use advanced sensors, motion detectors, and cameras to monitor and report suspicious activities.",
        "Our solutions are tailored for homes, offices, and high-security zones, providing robust protection and ensuring that alerts are delivered in real time for quick action."
      ]
    }
  ];

  enquire(productTitle: string): void {
    alert(`Thank you for your interest in ${productTitle}. We will contact you soon!`);
  }
  }
