import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileMainPageComponent} from "./profile/profile-main-page/profile-main-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'profile', component: ProfileComponent, children: [
      {path: '', component: ProfileMainPageComponent},
      {path: 'open', component: ProfileMainPageComponent}
    ]
  },
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
