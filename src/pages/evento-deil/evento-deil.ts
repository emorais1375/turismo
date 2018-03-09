import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-evento-deil',
  templateUrl: 'evento-deil.html',
})
export class EventoDeilPage {

  pauta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pauta = this.navParams.get('pauta');
  }
}
