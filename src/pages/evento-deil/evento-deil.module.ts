import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoDeilPage } from './evento-deil';

@NgModule({
  declarations: [
    EventoDeilPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoDeilPage),
  ],
})
export class EventoDeilPageModule {}
