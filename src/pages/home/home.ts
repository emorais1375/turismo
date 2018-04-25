import { PautasProvider } from './../../providers/pautas/pautas';
import { DescubraPage } from './../descubra/descubra';
import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, Slides } from 'ionic-angular';
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
  @ViewChild(Slides) slides: Slides;
  pautas: any;
  constructor(public navCtrl: NavController, private pautasProvider: PautasProvider) {
    this.pautas = [];
  }

  ionViewDidLoad(){
    let pautasLoaded = this.pautasProvider.load();

    Promise.all([pautasLoaded]).then((result) => {
      let pautasdata = result[0];
      for(let i of [0,1,2,3]){
        this.pautas.push(pautasdata[i]);
      }

    });
  }

  openAgenda() {
    this.navCtrl.push(ListPage);
  }
  openDestaque() {
    this.navCtrl.push(FeaturedPage);
  }
  openDescubra() {
    this.navCtrl.push(DescubraPage);
  }
  openEspacos() {
    this.navCtrl.push(PlacePage);
  }
  openDescricao(pauta) {
    this.navCtrl.push(EventoDeilPage, { pauta: pauta });
  }
  onSlideStart() {
    this.slides.startAutoplay();
  }
}
