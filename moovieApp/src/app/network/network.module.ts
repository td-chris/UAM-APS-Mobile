import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NetworkPage } from './network.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NetworkPageRoutingModule } from './network-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NetworkPageRoutingModule
  ],
  declarations: [NetworkPage]
})
export class NetworkPageModule {}
