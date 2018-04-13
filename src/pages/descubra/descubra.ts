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
  items = [
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
  items_list = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private launchNavigator: LaunchNavigator) { }

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
      start: [item.coord.lat, item.coord.lng]
    };
    
    this.launchNavigator.navigate([origin.lat, origin.lng], options)
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