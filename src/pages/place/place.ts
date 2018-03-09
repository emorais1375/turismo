import { PlaceDeilPage } from './../place-deil/place-deil';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  places: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private eventoProvider: EventoProvider) { }

  ionViewDidLoad() {
    this.places = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllPlaces(this.page);
  }

  getAllPlaces(page: number) {
    this.eventoProvider.getAllPlaces(page)
      .then((result: any) => {
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          this.places.push(element);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.places.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os eventos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getPlaces() {
    setTimeout(() => {
      this.page += 1;
      this.getAllPlaces(this.page);
    }, 500);
  }

  openPlace(id: number) {
    this.eventoProvider.getPlace(id)
      .then((result: any) => {
        this.navCtrl.push(PlaceDeilPage, { place: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o evento. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}
