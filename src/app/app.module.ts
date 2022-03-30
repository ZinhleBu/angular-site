import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OurWorkComponent } from '../components/our-work/our-work.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LottieModule } from 'ngx-lottie';
import { FooterComponent } from '../components/footer/footer.component'; // add this line
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CircleComponent } from '../components/circle/circle.component';
import { LottieComponent } from '../components/lottie/lottie.component';
import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { HttpClientModule } from '@angular/common/http';
import { LottoePhoneComponent } from '../components/lottoe-phone/lottoe-phone.component';


export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
} // add this line

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OurWorkComponent,
    PageNotFoundComponent,
    FooterComponent,
    CircleComponent,
    LottieComponent,
    LoginButtonComponent,
    LottoePhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }), // add this line

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
