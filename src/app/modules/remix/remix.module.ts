import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemixRoutingModule } from './remix-routing.module';
import { CustomizePageComponent } from './containers/customize-page/customize-page.component';
import { SharedModule } from '../shared';
import { NgxsModule } from '@ngxs/store';
import { RemixState } from './+state/remix.state';

@NgModule({
  declarations: [CustomizePageComponent],
  imports: [
    CommonModule,
    RemixRoutingModule,
    SharedModule,
    NgxsModule.forFeature([
      RemixState
    ]),
  ]
})
export class RemixModule { }
