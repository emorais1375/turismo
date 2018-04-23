import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationsProvider } from '../../providers/locations/locations';

@Component({
  selector: 'page-descubra',
  templateUrl: 'descubra.html',
})
export class DescubraPage {
  origin: any;
  locations;
  constructor(private launchNavigator: LaunchNavigator, private geo: Geolocation,
    private locationsProvider: LocationsProvider, public platform: Platform) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescubraPage');

    this.platform.ready().then(() => {
      this.geo.getCurrentPosition().then((resp) => {
        this.origin = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        };

        let locationsLoaded = this.locationsProvider.load(this.origin);

        Promise.all([locationsLoaded]).then((result) => {
          this.locations = result[0];
        });

      }).catch((error) => {
        console.log('Error getting location', error.code, error.message);
      });
    });
  }

  itemSelected(item) {
    console.log('Item:', item.name);
    this.openMaps(item, this.origin);
  }
  openMaps(item, origin) {
    console.log('Abrir App Maps');
    let options: LaunchNavigatorOptions = {
      start: [origin.lat, origin.lng]
    };
    this.launchNavigator.navigate([item.coordinate.lat, item.coordinate.lng], options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }

  hidePlace(item) {
    console.log('Button clicked id:', item.name);
  }
}