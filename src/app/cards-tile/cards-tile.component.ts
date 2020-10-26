import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-tile',
  templateUrl: './cards-tile.component.html',
  styleUrls: ['./cards-tile.component.css']
})
export class CardsTileComponent {
  cards = [
    {title: 'Дебетовая карта', src: '../../assets/img/cards/km-white.svg', link: 'assets/alif-km-white.png'},
    {title: 'Дебетовая карта', src: '../../assets/img/cards/km-black.svg', link: 'assets/alif-km-black.png'},
    {title: 'Карта рассрочки', src: '../../assets/img/cards/salom-card.svg', link: 'assets/alif-salom.png'}
  ]
}
