import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventoProvider {
  private API_URL = 'http://10.42.0.1:3000/';

  constructor(public http: Http) { }

  getAllPlaces(page: number) {
    return new Promise((resolve, reject) => {

      let apiURL = this.API_URL + 'places?_limit=10&_page=' + page;

      this.http.get(apiURL)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  getPlace(id: number) {
    return new Promise((resolve, reject) => {
      let apiURL = this.API_URL + 'places/' + id;

      this.http.get(apiURL)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  getAllPautas(page: number) {
    return new Promise((resolve, reject) => {

      let apiURL = this.API_URL + 'pautas?_limit=10&_page=' + page;

      this.http.get(apiURL)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  getPauta(id: number) {
    return new Promise((resolve, reject) => {
      let apiURL = this.API_URL + 'pautas/' + id;

      this.http.get(apiURL)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

}
