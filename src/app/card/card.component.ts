import { Component, input, output } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<Card>();
  flip = output<void>();

  onFlip() {
    this.flip.emit();
  }
}
