import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solarenergy',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
  ],
  templateUrl: './solarenergy.component.html',
  styleUrl: './solarenergy.component.css'
})
export class SolarenergyComponent {
  systems = [
    {
      title: "Solar Panels",
      image: "https://static.vecteezy.com/system/resources/thumbnails/024/712/158/small/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai-photo.jpg",
      description: [
        "High-efficiency solar panels designed for both residential and commercial use.",
        "Harness the power of the sun to reduce energy costs and lower your carbon footprint."
      ]
    },
    {
      title: "Solar Inverters",
      image: "https://blog.feniceenergy.com/wp-content/uploads/2024/04/solar-inverter-system.jpg",
      description: [
        "Advanced solar inverters that convert DC electricity into usable AC power.",
        "Features include high efficiency, reliability, and easy installation."
      ]
    },
    {
      title: "Solar Batteries",
      image: "https://www.inverter.com/images/uploaded/ups-inverter-solar-battery.jpg",
      description: [
        "Long-lasting solar batteries to store energy for use during nighttime or cloudy days.",
        "Supports energy independence and ensures power backup."
      ]
    },
    {
      title: "Solar Water Heaters",
      image: "https://www.suryasolarwaters.com/wp-content/uploads/2024/11/Solar-water-heater.png",
      description: [
        "Efficient solar water heating systems for residential and industrial applications.",
        "Reduce your energy costs while enjoying hot water anytime."
      ]
    },
    {
      title: "Solar Lighting Systems",
      image: "https://www.wiprolighting.com/media/images/blogpost/image/benefits-of-solar-lighting---wipro-lighting-1588504149.jpg",
      description: [
        "Innovative solar-powered lighting solutions for outdoor and indoor use.",
        "Sustainable, cost-effective, and easy to maintain."
      ]
    },
    {
      title: "Solar Chargers",
      image: "https://i5.walmartimages.com/asr/8cccbf11-374b-480d-93fa-21801978a5bc.0f1eda5de9337dec2269263976d911e8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description: [
        "Portable solar chargers for charging devices like phones, tablets, and laptops.",
        "Perfect for outdoor adventures or emergency situations."
      ]
    },
    {
      title: "Solar Cookers",
      image: "https://4.imimg.com/data4/LP/TA/MY-30248267/dish-type-solar-cooker.jpg",
      description: [
        "Eco-friendly solar cookers for cooking meals using sunlight.",
        "A great option for sustainable outdoor cooking."
      ]
    },
    {
      title: "Solar Air Conditioners",
      image: "https://solarlivingsavvy.com/wp-content/uploads/2024/01/How-Many-Solar-Panels-to-Run-Air-Conditioner.jpg",
      description: [
        "Energy-efficient solar air conditioners to keep your home cool during the summer.",
        "Utilizes solar energy to reduce electricity bills."
      ]
    },
    {
      title: "Solar Pumps",
      image: "https://3.imimg.com/data3/BP/YY/MY-1660241/908976185_orig-500x500.jpg",
      description: [
        "Reliable solar-powered water pumps for irrigation and water supply.",
        "Ideal for agricultural and domestic use in remote areas."
      ]
    },
    {
      title: "Solar Generators",
      image: "https://i.pinimg.com/736x/16/10/ac/1610ac3b94a11a5a358aa09d03418505.jpg",
      description: [
        "Portable solar generators for backup power during emergencies.",
        "Clean, silent, and reliable alternative to fuel-based generators."
      ]
    },
    {
      title: "Solar Pool Heating Systems",
      image: "https://www.celestialsolar.com/wp-content/uploads/2018/02/solar-pool-heating-Related-Services.webp",
      description: [
        "Efficient solar systems to heat swimming pools year-round.",
        "Reduces energy costs and environmental impact."
      ]
    },
    {
      title: "Solar Street Lights",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/4/408279776/WH/NO/FB/190717016/solar-street-light.jpg",
      description: [
        "Durable and weather-resistant solar street lights for outdoor use.",
        "Designed for sustainability and low maintenance."
      ]
    },
    {
      title: "Solar Roof Tiles",
      image: "https://cdn.prod.website-files.com/623133e3ba21ddbbc9f2474e/6361dccdb048527898d94b17_Solar%20Roof%20Tiles.png",
      description: [
        "Innovative solar roof tiles that blend seamlessly with your home's architecture.",
        "Generate energy while maintaining aesthetic appeal."
      ]
    }
  ];
  Contacts:string="+919005642832"
  onInquire(Contacts: string) {
    alert(`Contact Us: ${Contacts}`);

  }
}
  



