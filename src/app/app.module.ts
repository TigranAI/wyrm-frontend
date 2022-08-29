import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileMainPageComponent } from './profile/profile-main-page/profile-main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppComponent } from './app-component/app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProfileComponent,
    ProfileMainPageComponent,
    NotFoundPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
