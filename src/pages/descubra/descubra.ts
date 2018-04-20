import { MapaPage } from './../mapa/mapa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-descubra',
  templateUrl: 'descubra.html',
})
export class DescubraPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;
  origin = { lat: -3.1044474, lng: -60.054301 };
  items: any[];
  items_list = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private launchNavigator: LaunchNavigator) { 
      this.items = [
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
          "image": "assets/img/p01.jpg",
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
          "image": "assets/img/p02.jpg",
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
          "image": "assets/img/p03.jpg",
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
          "image": "assets/img/p04.jpg",
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
          "image": "assets/img/p05.jpg",
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
          "image": "assets/img/p06.jpg",
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
          "image": "assets/img/p07.jpg",
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
          "image": "assets/img/p08.jpg",
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
          "image": "assets/img/p09.jpg",
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
          "image": "assets/img/p10.jpg",
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
          "image": "assets/img/p11.jpg",
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
          "image": "assets/img/p12.jpg",
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
          "image": "assets/img/p13.jpg",
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
          "image": "assets/img/p14.jpg",
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
          "image": "assets/img/p15.jpg",
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
          "image": "assets/img/p16.jpg",
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
          "image": "assets/img/p17.jpg",
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
          "image": "assets/img/p18.jpg",
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
          "image": "assets/img/p19.jpg",
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
          "image": "assets/img/p20.jpg",
          "location": "Av. Nações Unidas, s/n - Centro, Parintins - AM, 69151-060",
          "coordinate": {
            "lat": -2.62548,
            "lng": -56.735632
          }
        }
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescubraPage');
  }
  itemSelected(item) {
    this.navCtrl.push(MapaPage, { item: item, origin: this.origin });
  }
  itemSelected2(item) {
    console.log('Item id:',item.id);
    this.openMaps(item, this.origin);
  }
  openMaps(item, origin) {
    console.log('Abrir Google Maps');
    let options: LaunchNavigatorOptions = {
      start: [origin.lat, origin.lng]
    };
    
    this.launchNavigator.navigate([item.coordinate.lat, item.coordinate.lng], options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Pretende visitar quais lugares?');

    for (let item of this.items) {
      alert.addInput({
        type: 'checkbox',
        label: item.name,
        value: item.id.toString(),
        checked: item.checked        
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        for (let index in this.items) {
          this.items[index].checked = false;          
        }
        this.items_list.splice(0, Number.MAX_VALUE);
        for (let index of data) {
          this.items[index-1].checked = true;
          this.items_list.splice(-1, 0, this.items[index-1]);
        }
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }
  hidePlace(item) {
    console.log('Button clicked id:', item.id);
  }
}