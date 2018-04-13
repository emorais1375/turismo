import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place-deil',
  templateUrl: 'place-deil.html',
})
export class PlaceDeilPage {

  place: any;

  constructor(public navParams: NavParams) {
    this.place = this.navParams.get('place');
  }
}
