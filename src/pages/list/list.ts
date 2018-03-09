import { EventoDeilPage } from './../evento-deil/evento-deil';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pautas: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private eventoProvider: EventoProvider) { }

  ionViewDidLoad() {
    this.pautas = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllPautas(this.page);
  }

  getAllPautas(page: number) {
    this.eventoProvider.getAllPautas(page)
      .then((result: any) => {
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          this.pautas.push(element);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.pautas.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os eventos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getPautas() {
    setTimeout(() => {
      this.page += 1;
      this.getAllPautas(this.page);
    }, 500);
  }

  openPauta(id: number) {
    this.eventoProvider.getPauta(id)
      .then((result: any) => {
        this.navCtrl.push(EventoDeilPage, { pauta: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o evento. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
