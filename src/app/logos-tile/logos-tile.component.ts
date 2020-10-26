import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos-tile',
  templateUrl: './logos-tile.component.html',
  styleUrls: ['./logos-tile.component.css']
})
export class LogosTileComponent {

  logos = [
    {title: 'Основной логотип банка', src: '../../assets/img/logos/alif.svg', link: 'assets/alif-logo.zip'},
    {title: 'Интернет магазин', src: '../../assets/img/logos/shop.svg', link: 'assets/alif-shop-logo.zip'},
    {title: 'Мобильный кошелек', src: '../../assets/img/logos/mobi.svg', link: 'assets/alif-mobi-logo.zip'},
    {title: 'Карта рассрочки', src: '../../assets/img/logos/salom.svg', link: 'assets/alif-salom-logo.zip'},
    {title: 'Онлайн школа', src: '../../assets/img/logos/academy.svg', link: 'assets/alif-academy-logo.zip'},
    {title: 'Система онлайн-платежей', src: '../../assets/img/logos/pay.svg', link: 'assets/alif-pay-logo.zip'},
    {title: 'Онлайн банкинг', src: '../../assets/img/logos/business.svg', link: 'assets/alif-business-logo.zip'}
  ]

}
