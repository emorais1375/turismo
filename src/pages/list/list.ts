import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { EventoDeilPage } from "../evento-deil/evento-deil";
import { PautasProvider } from "../../providers/pautas/pautas";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pautas: any;

  constructor(public navCtrl: NavController, private pautasProvider: PautasProvider) {
  }

  ionViewDidLoad(){
    let pautasLoaded = this.pautasProvider.load();

    Promise.all([pautasLoaded]).then((result) => {
      this.pautas = result[0];
    });
  }

  openPauta(pauta){
    this.navCtrl.push(EventoDeilPage, {pauta: pauta});
  }
}
