import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'div.collection[profile-main-page]',
  templateUrl: './profile-main-page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileMainPageComponent {

  level: number = 7;
  exp: number = 15869;
  nextLevelExp: number = 333333;
  totalExp: number = 65629;
  coins: number = 281150;
  gems: number = 2197;
  candies: number = 551;
  piggyBank = {coins: 800, candies: 200};
  cash = {coins: 800, candies: 200};
  dailyTasks = [{progress: 0, goal: 5, title: 'Отправка стикеров 5-и пользователям'}]

}
