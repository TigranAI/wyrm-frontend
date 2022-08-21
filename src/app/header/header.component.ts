import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/StickerBot/img/Dragon_av.png'

  constructor() { }

  ngOnInit(): void {
  }

}
