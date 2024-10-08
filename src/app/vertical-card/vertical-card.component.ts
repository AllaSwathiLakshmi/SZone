import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  standalone: true,
  imports: [],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.css'
})
export class VerticalCardComponent {
  @Input() vertical!: { name: string, description: string, image: string };

}
