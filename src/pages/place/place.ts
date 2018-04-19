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
      "name": "Palácio Rio Negro",
      "description": "",
      "dia": {
        "seg": "13:00-17:00",
        "ter": "13:00-17:00",
        "qua": "13:00-17:00",
        "qui": "13:00-17:00",
        "sex": "13:00-17:00",
        "sab": "13:00-17:00",
        "dom": "11:00-15:00"
      },
      "phone": "(92) 3232-4450",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2013/12/3564-960x600.jpg",
      "location": "Av. 7 de Setembro – Centro",
      "coordinate": {
        "lat": -3.134911,
        "lng": -60.016874
      }
    },
    {
      "name": "Palácio da Justiça",
      "description": "",
      "dia": {
        "seg": "13:00-17:00",
        "ter": "13:00-17:00",
        "qua": "13:00-17:00",
        "qui": "13:00-17:00",
        "sex": "13:00-17:00",
        "sab": "13:00-17:00",
        "dom": "11:00-15:00"
      },
      "phone": "(92) 3248-1844",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/130-76-960x601.jpg",
      "location": "Av. Eduardo Ribeiro – Centro",
      "coordinate": {
        "lat": -3.129944,
        "lng": -60.024312
      }
    },
    {
      "name": "Usina Chaminé",
      "description": "",
      "dia": {
        "seg": "13:00-17:00",
        "ter": "13:00-17:00",
        "qua": "13:00-17:00",
        "qui": "13:00-17:00",
        "sex": "13:00-17:00",
        "sab": "13:00-17:00",
        "dom": "11:00-15:00"
      },
      "phone": "(92) 3633-3026",
      "image": "http://www.amazonasemais.com.br/wp-content/uploads/2016/08/teatro-chamine.jpg",
      "location": "Av. Manaus Moderna – Centro",
      "coordinate": {
        "lat": -3.138693,
        "lng": -60.017316
      }
    },
    {
      "name": "Centro Cultural Povos da Amazônia",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 2125-5300",
      "image": "https://media-cdn.tripadvisor.com/media/photo-s/0c/19/ef/5e/centro-cultural-dos-povos.jpg",
      "location": "Av. Silves Nº 2.222 – Distrito Industrial I",
      "coordinate": {
        "lat": -3.132935,
        "lng": -59.987277
      }
    },
    {
      "name": "Palacete Provincial",
      "description": "",
      "dia": {
        "seg": "09:00-14:00",
        "ter": "09:00-14:00",
        "qua": "09:00-14:00",
        "qui": "09:00-14:00",
        "sex": "09:00-14:00",
        "sab": "09:00-14:00",
        "dom": "09:00-14:00"
      },
      "phone": "(92) 3631-6047",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/04/01-1-Palacete-Provincial-960x750.jpg",
      "location": "Praça Heliodoro Balbi – Centro",
      "coordinate": {
        "lat": -3.135523,
        "lng": -60.021028
      }
    },
    {
      "name": "Museu Casa Eduardo Ribeiro",
      "description": "",
      "dia": {
        "seg": "09:00-14:00",
        "ter": "09:00-14:00",
        "qua": "09:00-14:00",
        "qui": "09:00-14:00",
        "sex": "09:00-14:00",
        "sab": "09:00-14:00",
        "dom": "09:00-14:00"
      },
      "phone": "(92) 3631-2938",
      "image": "http://s2.glbimg.com/_ufS-s85Wf54FdIJS7oWXaiZ1ZM=/620x465/s.glbimg.com/jo/g1/f/original/2017/03/17/museu_casa_eduardo_ribeiro.jpg",
      "location": "Rua José Clemente, 322 – Centro",
      "coordinate": {
        "lat": -3.130682,
        "lng": -60.025282
      }
    },
    {
      "name": "Museu do Seringal",
      "description": "",
      "dia": {
        "seg": "08:00-16:00",
        "ter": "08:00-16:00",
        "qua": "08:00-16:00",
        "qui": "08:00-16:00",
        "sex": "08:00-16:00",
        "sab": "08:00-16:00",
        "dom": "08:00-16:00"
      },
      "phone": "(92) 3658-6159",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/msvp3-960x750.jpg",
      "location": "Igarapé São João – Afluente do Igarapé do Tarumã Mirim (Zona Rural)",
      "coordinate": {
        "lat": -3.009984,
        "lng": -60.175455
      }
    },
    {
      "name": "Museu do Homem do Norte",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 2125-5323",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/394800_479558758747397_1332127696_n-960x750.jpg",
      "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I - Praça Pereira da Silva",
      "coordinate": {
        "lat": -3.132931,
        "lng": -59.987252
      }
    },
    {
      "name": "Galeria do Largo",
      "description": "",
      "dia": {
        "seg": "13:00-19:00",
        "ter": "13:00-19:00",
        "qua": "13:00-19:00",
        "qui": "13:00-19:00",
        "sex": "13:00-19:00",
        "sab": "13:00-19:00",
        "dom": "13:00-19:00"
      },
      "phone": "(92) 3631-4786",
      "image": "http://s2.glbimg.com/nfbyNwMuYGdjAPzHg0P9D8QyAd8=/620x465/s.glbimg.com/jo/g1/f/original/2015/12/18/apadmtwhnmqpjtwourpbebjalz1glhnsuuzyxppybt2p.jpg",
      "location": "Largo de São Sebastião",
      "coordinate": {
        "lat": -3.130009,
        "lng": -60.022139
      }
    },
    {
      "name": "Casa das Artes",
      "description": "",
      "dia": {
        "seg": "15:00-21:00",
        "ter": "15:00-21:00",
        "qua": "15:00-21:00",
        "qui": "15:00-21:00",
        "sex": "15:00-21:00",
        "sab": "15:00-21:00",
        "dom": "15:00-21:00"
      },
      "phone": "(92) 3631-6227",
      "image": "http://s2.glbimg.com/fI4a83PvDNGb_PNOXM_TproRi6s=/0x0:1700x1065/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/10/17/foto_16.jpg",
      "location": "Largo de São Sebastião",
      "coordinate": {
        "lat": -3.061842,
        "lng": -59.99792
      }
    },
    {
      "name": "Teatro Amazonas",
      "description": "",
      "dia": {
        "seg": "09:00-14:00",
        "ter": "09:00-17:00",
        "qua": "09:00-17:00",
        "qui": "09:00-17:00",
        "sex": "09:00-17:00",
        "sab": "09:00-17:00",
        "dom": "09:00-14:00"
      },
      "phone": "(92) 3232-1768",
      "image": "http://amazonasatual.com.br/wp-content/uploads/2017/04/Teatro-Amazonas-by-Valmir-Lima.jpg",
      "location": "Av. Eduardo Ribeiro, Largo de São Sebastião",
      "coordinate": {
        "lat": -3.130031,
        "lng": -60.023517
      }
    },
    {
      "name": "Biblioteca Pública",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3234-0588",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/biblioteca-publica-960x600.jpg",
      "location": "Rua Barroso, 57 - Centro Histórico",
      "coordinate": {
        "lat": -3.134292,
        "lng": -60.023412
      }
    },
    {
      "name": "Biblioteca Braille",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3622-0869",
      "image": "http://3.bp.blogspot.com/-CLr16Yu0N4U/UnQtJ_MorII/AAAAAAAAL1U/hmMHPZ7hyt4/s1600/biblioteca+braille+manaus+(1).JPG",
      "location": "Av. Pedro Teixeira, 2565 - Bloco C Sambódromo",
      "coordinate": {
        "lat": -3.085066,
        "lng": -60.029647
      }
    },
    {
      "name": "Biblioteca Arthur Reis",
      "description": "",
      "dia": {
        "seg": "08:00-14:00",
        "ter": "08:00-14:00",
        "qua": "08:00-14:00",
        "qui": "08:00-14:00",
        "sex": "08:00-14:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 2523-5317",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2016/10/DSC_8416-960x600.jpg",
      "location": "Av. Silves, 2.222 - Distrito Industrial, Bola da Suframa",
      "coordinate": {
        "lat": -3.132759,
        "lng": -59.987016
      }
    },
    {
      "name": "Biblioteca Mario Ypiranga",
      "description": "",
      "dia": {
        "seg": "08:00-14:00",
        "ter": "08:00-14:00",
        "qua": "08:00-14:00",
        "qui": "08:00-14:00",
        "sex": "08:00-14:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 2125-5328",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2017/11/biblioteca-mario-ypiranga.jpeg",
      "location": "Av. Silves Nº 2.222 – Distrito Industrial I, antiga Bola da Suframa, situada dentro do Centro Cultural dos Povos da Amazônia.",
      "coordinate": {
        "lat": -3.132738,
        "lng": -59.987359
      }
    },
    {
      "name": "Biblioteca Thália Phedra",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3234-0588",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/thalia_phedra-960x600.jpg",
      "location": "Av. Sete de Setembro S/N – Centro Cultural Palácio Rio Branco- Centro Histórico",
      "coordinate": {
        "lat": -3.132427,
        "lng": -60.028497
      }
    },
    {
      "name": "Biblioteca Genesino Braga",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3249-1098",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/biblioteca-genesino-braga-960x600.jpg",
      "location": "Av. Autaz Mirím, 6250 – Shopping Grande Circular – São José II – Cep 69,085-000 – Manaus – Am – Brasil",
      "coordinate": {
        "lat": -3.0620629,
        "lng": -59.9518575
      }
    },
    {
      "name": "Biblioteca Padre Agostinho Caballero Martin",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3633-7955",
      "image": "http://3.bp.blogspot.com/-7PRlV1xb02g/VS8ai8yli2I/AAAAAAAASzc/Vi_QCDoGj20/s1600/biblioteca%2B(12).JPG",
      "location": "Rua da Instalação, 70 – centro – CEP: 69010-200 – Manaus/Amazonas",
      "coordinate": {
        "lat": -3.135008,
        "lng": -60.026266
      }
    },
    {
      "name": "Biblioteca de Artes",
      "description": "",
      "dia": {
        "seg": "08:00-17:00",
        "ter": "08:00-17:00",
        "qua": "08:00-17:00",
        "qui": "08:00-17:00",
        "sex": "08:00-17:00",
        "sab": "Fechado",
        "dom": "Fechado"
      },
      "phone": "(92) 3233 6058",
      "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/03/biblioteca-de-artes-960x600.jpg",
      "location": "Av. Pedro Teixeira, 2565, no Liceu de Artes e Ofícios Cláudio Santoro, Bloco E, dentro do Sambódromo.",
      "coordinate": {
        "lat": -3.084222,
        "lng": -60.029543
      }
    },
    {
      "name": "Bumbódromo-Parintins",
      "description": "",
      "dia": {
        "seg": "08:30-11:00 e 14:30-17:00",
        "ter": "08:30-11:00 e 14:30-17:00",
        "qua": "08:30-11:00 e 14:30-17:00",
        "qui": "08:30-11:00 e 14:30-17:00",
        "sex": "08:30-11:00 e 14:30-17:00",
        "sab": "14:00-18:00",
        "dom": "Fechado"
      },
      "phone": "(92)3533-6241 ",
      "image": "http://2.bp.blogspot.com/-k_9FeysnfPM/UdF1cNcbPiI/AAAAAAAAEMo/xYzQehEOaks/s1600/Bumbodromo-de-Parintins-AM_CHICO-BATATA-AGECOM_4.jpg",
      "location": "Av. Nações Unidas, s/n - Centro, Parintins - AM, 69151-060",
      "coordinate": {
        "lat": -2.62548,
        "lng": -56.735632
      }
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
