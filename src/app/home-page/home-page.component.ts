import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[home-page]',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  sliderPackPreviews: String[] = [];
  welcomeStickers: String[] = [];
  instructions: String[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.welcomeStickers.push(
      'assets/StickerBot/img/stickers/Компиляция Cesar.webp',
      'assets/StickerBot/img/stickers/Компиляция ZDarya.webp',
      'assets/StickerBot/img/stickers/Компиляция Texic.webp',
      'assets/StickerBot/img/stickers/Компиляция Shenshila_2.webp'
    )

    this.sliderPackPreviews.push(
      'assets/StickerBot/img/stickers/Cesar/smd2.tgs',
      'assets/StickerBot/img/stickers/07.webp',
      'assets/StickerBot/img/stickers/forSale/data_2_watermark.tgs',
      'assets/StickerBot/img/stickers/forSale/data_watermark.tgs'
    )

    this.instructions.push(
      'assets/StickerBot/img/gif/1. Сбор прибыли.gif',
      'assets/StickerBot/img/gif/2. Отправка стикера через коллекцию.gif',
      'assets/StickerBot/img/gif/3. Отправка стикеров через собаку.gif',
      'assets/StickerBot/img/gif/4. Покупка обычного пака за золото.gif',
      'assets/StickerBot/img/gif/5. Покупка пака художника.gif',
      'assets/StickerBot/img/gif/6. Покупка алмазов.gif',
      'assets/StickerBot/img/gif/7. Открытие паков.gif',
      'assets/StickerBot/img/gif/8. Объединение стикеров.gif',
      'assets/StickerBot/img/gif/9. Фильтр по стикерам через коллекцию.gif',
      'assets/StickerBot/img/gif/10. Фильтр по стикерам через собаку.gif',
      'assets/StickerBot/img/gif/11. Продажа стикера на аукционе.gif',
      'assets/StickerBot/img/gif/12. Покупка стикеров на аукционе.gif',
    )
  }
}
