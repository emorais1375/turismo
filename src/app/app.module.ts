import { EventoDeilPageModule } from './../pages/evento-deil/evento-deil.module';
import { EventoProvider } from './../providers/evento/evento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http'
import { FeaturedPageModule } from '../pages/featured/featured.module';
import { PlacePageModule } from '../pages/place/place.module';
import { MapaPageModule } from '../pages/mapa/mapa.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FeaturedPageModule,
    PlacePageModule,
    MapaPageModule,
    EventoDeilPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoProvider
  ]
})
export class AppModule {}
