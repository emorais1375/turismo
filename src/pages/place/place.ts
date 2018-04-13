import { PlaceDeilPage } from '../place-deil/place-deil';
// import { Component, ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
// import { EventoProvider } from '../../providers/evento/evento';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  //places: any[];
  places2 = [
    {
      id: 1,
      name: 'Palácio Rio Negro',
      coord: {
        lat: -3.1330537,
        lng: -59.987268
      },
      checked: false
    },
    {
      id: 2,
      name: 'Palácio da Justiça',
      coord: {
        lat: -3.135547,
        lng: -60.021025
      },
      checked: false
    },
    {
      id: 3,
      name: 'Usina Chaminé',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 4,
      name: 'Centro Cultural dos Povos da Amazônia',
      coord: { lat: -3.0912637, lng: -60.0178027 },
      checked: false
    },
    {
      id: 5,
      name: 'Palacete Provincial',
      coord: {
        lat: -3.135547,
        lng: -60.021025
      },
      checked: false
    },
    {
      id: 6,
      name: 'Museu Casa Eduardo Ribeiro',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 7,
      name: 'Museu do Seringal',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 8,
      name: 'Museu do Homem do Norte',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 9,
      name: 'Galeria do Largo',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 10,
      name: 'Casa das Artes',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 11,
      name: 'Teatro Amazonas',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 12,
      name: 'Biblioteca Pública',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 13,
      name: 'Biblioteca Braille',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 14,
      name: 'Biblioteca Arthur Reis',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 15,
      name: 'Biblioteca Mario Ypiranga',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 16,
      name: 'Biblioteca Thália Phedra',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 17,
      name: 'Biblioteca Genesino Braga',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 18,
      name: 'Biblioteca Padre Agostinho Caballero Martin',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 19,
      name: 'Biblioteca de Artes',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 20,
      name: 'Bumbódromo-Parintins',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    }
  ];
  //page: number;
  //@ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  //constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private eventoProvider: EventoProvider) { }
  constructor(public navCtrl: NavController, ) {}

  // ionViewDidLoad() {
  //   this.places = [];
  //   this.page = 1;
  //   this.infiniteScroll.enable(true);
  //   this.getAllPlaces(this.page);
  // }

  // getAllPlaces(page: number) {
  //   this.eventoProvider.getAllPlaces(page)
  //     .then((result: any) => {
  //       for (let index = 0; index < result.length; index++) {
  //         const element = result[index];
  //         this.places.push(element);
  //       }

  //       if (this.infiniteScroll) {
  //         this.infiniteScroll.complete();
  //         if (this.places.length == result.total) {
  //           this.infiniteScroll.enable(false);
  //         }
  //       }
  //     })
  //     .catch((error: any) => {
  //       this.toast.create({ message: 'Erro ao listar os eventos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
  //     });
  // }

  // getPlaces() {
  //   setTimeout(() => {
  //     this.page += 1;
  //     this.getAllPlaces(this.page);
  //   }, 500);
  // }

  // openPlace(id: number) {
  //   this.eventoProvider.getPlace(id)
  //     .then((result: any) => {
  //       this.navCtrl.push(PlaceDeilPage, { place: result });
  //     })
  //     .catch((error: any) => {
  //       this.toast.create({ message: 'Erro ao recuperar o evento. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
  //     });
  // }

  openPlace(item) {
    console.log("Nome: ",item.name);
    this.navCtrl.push(PlaceDeilPage, {place: item});
  }
}
