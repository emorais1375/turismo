import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class LocationsProvider {
  private basepath: string = '/distanceapi';
  private API_URL: string = '/maps/api/distancematrix/';
  private key: string = 'AIzaSyBK7GgyTnJYkVQIxxLGvdGGwSLApUImnLU';
  private destinations: string = '-3.134911,-60.016874|-3.129944,-60.024312|-3.138693,-60.017316|-3.132935,-59.987277|-3.135523,-60.021028|-3.130682,-60.025282|-3.009984,-60.175455|-3.132931,-59.987252|-3.130009,-60.022139|-3.061842,-59.99792|-3.130031,-60.023517|-3.134292,-60.023412|-3.085066,-60.029647|-3.132759,-59.987016|-3.132738,-59.987359|-3.132427,-60.028497|-3.0620629,-59.9518575|-3.135008,-60.026266|-3.084222,-60.029543';
  
  data: any;
  usersLocation;

  constructor(public http: Http, private _plataform: Platform) { 
    if (this._plataform.is('cordova')) {
      this.basepath = 'https://maps.googleapis.com';
    }
  }

  getDistances(origins: string) {
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise((resolve, reject) => {

      let apiURL = `${this.basepath}${this.API_URL}json?origins=${origins}&destinations=${this.destinations}&key=${this.key}`;

      this.http.get(apiURL)
        .subscribe((result: any) => {
          this.data = result.json();
          resolve(this.data);
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  load(usersLocation){
    
    this.usersLocation = usersLocation;

    if(this.data){
        return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

        this.http.get('assets/data/locations.json').map(res => res.json()).subscribe(data => {

          this.data = this.applyHaversine(data.locations);

          this.data.sort((locationA, locationB) => {
            return locationA.distance - locationB.distance;
          });

          resolve(this.data);
        });

    });
  }

  applyHaversine(locations){
 
    let usersLocation = this.usersLocation;

    locations.map((location) => {

        let placeLocation = location.coordinate;

        location.distance = this.getDistanceBetweenPoints(
            usersLocation,
            placeLocation,
            'km'
        ).toFixed(2);
    });

    return locations;
  }

  getDistanceBetweenPoints(start, end, units){
 
    let earthRadius = {
        miles: 3958.8,
        km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;
  }

  toRad(x){
      return x * Math.PI / 180;
  }

}
