import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  page: 'home' | 'login' | 'profile' | 'sticker' | 'pack' | 'shop' | 'auction' | 'top' = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
