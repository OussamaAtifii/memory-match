import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/card.model';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-board',
  imports: [CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  cards = signal<Card[]>([]);
  flippedCards = signal<Card[]>([]);
  attempts = signal<number>(0);

  constructor() {
    this.initializeGame();
  }

  private initializeGame = () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F'];

    const deck: Card[] = [...values, ...values]
      .sort(() => 0.5 - Math.random())
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));

    this.cards.set(deck);
  };

  onFlip(card: Card) {
    if (card.isFlipped || card.isMatched || this.flippedCards().length === 2) {
      return;
    }

    card.isFlipped = true;

    this.flippedCards.update((flippedCards) => [...flippedCards, card]);
    console.log(this.flippedCards());

    console.log(card);

    if (this.flippedCards().length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    const [firstCard, secondCard] = this.flippedCards();

    if (firstCard.value === secondCard.value) {
      this.cards.update((cards) => {
        return cards.map((card) => {
          return [firstCard.id, secondCard.id].includes(card.id)
            ? { ...card, isMatched: true }
            : card;
        });
      });
    } else {
      setTimeout(() => {
        this.cards.update((cards) => {
          return cards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card,
          );
        });
      }, 500);
    }

    this.attempts.update((attempts) => attempts + 1);
    this.flippedCards.set([]);
    this.checkFinish();
  }

  checkFinish() {
    const isEnd = this.cards().find((card) => card.isMatched === false);

    if (!isEnd) {
      this.celebrate();
    }
  }

  celebrate() {
    const duration = 3000;

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setTimeout(() => confetti.reset(), duration);
  }

  reset() {
    this.cards.update((cards) => {
      return cards.map((card) => ({
        ...card,
        isMatched: false,
        isFlipped: false,
      }));
    });

    this.attempts.set(0);
  }
}
