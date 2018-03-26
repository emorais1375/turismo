import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


declare var google

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  item;
  origin;
  locations = [
    { lat: -3.1330537, lng: -59.987268 },
    { lat: -3.135547, lng: -60.021025 },
    { lat: -3.132628, lng: -59.98715 }, // Centro Cultural dos Povos da Amazônia
    { lat: -3.1044474, lng: -60.054301 } // Amazonas Shopping
  ]
  constructor(
    private geo: Geolocation, params: NavParams,
    private launchNavigator: LaunchNavigator) {
    this.item = params.data.item;
    this.origin = params.data.origin;
  }

  ionViewDidLoad() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: this.origin,
      options: { disableDefaultUI: true }
    });
    this.directionsDisplay.setMap(this.map);
    this.directionsService.route({
      origin: this.origin,
      destination: this.item.coord,
      travelMode: 'DRIVING'
    }, (result, status) => {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(result);
      }
    });
  }

  openMaps() {
    console.log('Abrir Google Maps');
    let options: LaunchNavigatorOptions = {
      start: [this.item.coord.lat, this.item.coord.lng]
    };
    
    this.launchNavigator.navigate([this.origin.lat,this.origin.lng], options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}
