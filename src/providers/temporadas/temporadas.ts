import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TemporadasProvider {
  data: any;

  constructor(public http: Http) { }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/temporadas.json').map(res => res.json()).subscribe(data => {

        this.data = data.temporadas;

        resolve(this.data);
      });

    });
  }
}
