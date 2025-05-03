import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showModal = false;
  selectedCard: number | null = null;

  openModal(cardIndex: number) {
    this.selectedCard = cardIndex;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCard = null;
  }
}