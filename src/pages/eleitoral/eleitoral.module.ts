import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EleitoralPage } from './eleitoral';

@NgModule({
  declarations: [
    EleitoralPage,
  ],
  imports: [
    IonicPageModule.forChild(EleitoralPage),
  ],
})
export class EleitoralPageModule {}
