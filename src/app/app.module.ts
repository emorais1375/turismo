import { PlaceDeilPageModule } from './../pages/place-deil/place-deil.module';
import { EventoDeilPageModule } from './../pages/evento-deil/evento-deil.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DescubraPage } from '../pages/descubra/descubra';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http'
import { FeaturedPageModule } from '../pages/featured/featured.module';
import { PlacePageModule } from '../pages/place/place.module';
import { MapaPageModule } from '../pages/mapa/mapa.module';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator'
import { LocationsProvider } from '../providers/locations/locations';
import { PautasProvider } from '../providers/pautas/pautas';
import { TemporadasProvider } from '../providers/temporadas/temporadas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DescubraPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FeaturedPageModule,
    PlacePageModule,
    MapaPageModule,
    EventoDeilPageModule,
    PlaceDeilPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DescubraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PautasProvider,
    LocationsProvider,
    TemporadasProvider
  ]
})
export class AppModule {}
