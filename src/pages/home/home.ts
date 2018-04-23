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
  pautas: any[];
  page: number;
  slides2 = [
    {
        "id": 1,
        "name": "EXPOSIÇÃO “CARNAVAL – A MAIOR FESTA POPULAR DO BRASIL”",
        "description": "O Centro Cultural Palácio Rio Negro recebe, a partir do dia 9 de março, a exposição fotográfica “Carnaval – a maior festa popular do Brasil”, realizada por alunos da turma de fotografia do Serviço Nacional de Aprendizagem Comercial no Amazonas (Senac-AM). O evento, que vai reunir mais de 70 fotografias mostrando os mais variados ângulos da festa, é gratuito e conta com apoio da Secretaria de Estado de Cultura (SEC), por meio do Programa Espaço Aberto.",
        "location": "Av. Gen. Rodrigo Otávio, 945, Distrito Industrial",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "08:00",
        "hour_end": "17:00",
        "price": "1,00",
        "url_ticket": "",
        "image": "assets/img/n01.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg"
        }
      },
      {
        "id": 2,
        "name": "TARDE DANÇANTE",
        "description": "Na sexta-feira (09) acontece a tradicional “Tarde Dançante”, no Centro Estadual de Convivência do Idoso. O evento terá um repertório exclusivo com músicas de Bolero.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "14:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "assets/img/n02.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg"
        }
      },
      {
        "id": 3,
        "name": "LANÇAMENTO DO DOCUMENTÁRIO “PELAS ÁGUAS DO RIO DE LEITE”",
        "description": "Como parte da programação do Espaço Aberto, haverá o lançamento do documentário “Pelas águas do rio de leite”, às 18h, no  Teatro da Instalação.",
        "location": "Praça Heliodoro Balbi, S/N - Centro",
        "type": "Cinema",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "assets/img/n03.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg"
        }
      },
      {
        "id": 4,
        "name": "APOIO SOCIAL E JURÍDICO",
        "description": "A temporada ‘Delas’ iniciou em 25 de fevereiro de 2018, e contará com debates sobre o protagonismo feminino, valorização da mulher negra, situação da mulher indígena e da mulher trans na sociedade; oficina de empoderamento; dia de beleza para moradoras de rua; marcha das mulheres; e apoio social e jurídico para mulheres em situação de risco.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Utilidade Pública",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "20:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "assets/img/n04.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/t6zkHwQ8nmU1N6X1OOouXIpyeYz.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/t6zkHwQ8nmU1N6X1OOouXIpyeYz.jpg"
        }
      }
  ];
  public list_event = new Array<any>();
  public list = new Array<any>();
  datas: any = [];
  constructor(public navCtrl: NavController, private toast: ToastController) {
    for (let index = 0; index < 10; index++) {
      this.datas.push(index);
    }
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
  openDescricao(id: number) {
    this.navCtrl.push(EventoDeilPage, { pauta: this.slides2[id] });
  }
  onSlideStart() {
    this.slides.startAutoplay();
  }
}
