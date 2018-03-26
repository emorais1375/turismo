import { DescubraPage } from './../descubra/descubra';
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
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/exposi%C3%A7%C3%A3o-fotografica-carnaval-1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://www.cultura.am.gov.br/conteudo/uploads/2014/04/FOTO-2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/exposi%C3%A7%C3%A3o-fotografica-carnaval-1.jpg",
    }
  ];
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
    this.navCtrl.push(DescubraPage);
  }
  openEspacos() {
    this.navCtrl.push(PlacePage);
  }
  openDescricao() {
    this.navCtrl.push(EventoDeilPage);
  }
}
