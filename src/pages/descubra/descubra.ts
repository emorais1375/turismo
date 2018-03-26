import { MapaPage } from './../mapa/mapa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
      name: 'Museu do Homem do Norte',
      coord: {
        lat: -3.1330537,
        lng: -59.987268
      },
      checked: false
    },
    {
      id: 2,
      name: 'Pinacoteca do Estado',
      coord: {
        lat: -3.135547,
        lng: -60.021025
      },
      checked: false
    },
    {
      id: 3,
      name: 'Amazonas Shopping',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    },
    {
      id: 4,
      name: 'UEA',
      coord: { lat: -3.0912637, lng: -60.0178027 },
      checked: false
    },
    {
      id: 5,
      name: 'Pinacoteca do Estado',
      coord: {
        lat: -3.135547,
        lng: -60.021025
      },
      checked: false
    },
    {
      id: 6,
      name: 'Amazonas Shopping',
      coord: { lat: -3.0936593, lng: -60.0237112 },
      checked: false
    }
  ];
  items_list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescubraPage');
  }
  itemSelected(item) {
    this.navCtrl.push(MapaPage, { item: item, origin: this.origin });
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
}