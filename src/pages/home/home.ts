import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PlacePage } from '../place/place';
import { MapaPage } from '../mapa/mapa';
import { FeaturedPage } from '../featured/featured';
import { EventoDeilPage } from '../evento-deil/evento-deil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list_event = new Array<any>();
  public list = new Array<any>();
  datas: any = [];
  constructor(public navCtrl: NavController) {
    for (let index = 0; index < 10; index++) {
      this.datas.push(index);
    }
  }

  ionViewDidLoad() {
  }

  openAgenda() {
    this.navCtrl.push(ListPage);
  }
  openDestaque() {
    this.navCtrl.push(FeaturedPage);
  }
  openDescubra() {
    this.navCtrl.push(MapaPage);
  }
  openEspacos() {
    this.navCtrl.push(PlacePage);
  }
  openDescricao() {
    this.navCtrl.push(EventoDeilPage);
  }
}
