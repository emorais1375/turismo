import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PautasProvider {
  data: any;

  constructor(public http: Http) { }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/pautas.json').map(res => res.json()).subscribe(data => {

        this.data = data.pautas;

        resolve(this.data);
      });

    });
  }

}
