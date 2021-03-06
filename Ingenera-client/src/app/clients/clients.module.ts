import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientContainerComponent } from './client-container/client-container.component';
import { ClientDasboardComponent } from './client-dasboard/client-dasboard.component';
import { ClientRequestsComponent } from './client-requests/client-requests.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { RouterModule } from '@angular/router';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { ClientsRoutingModule } from './clients-routing.module'
import { SharedModule } from '../shared/shared.module'
import { MissionService } from './services'
import { TagInputModule } from 'ngx-chips';
import { Authervice } from '../authorization/auth.service'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MissionSectorComponent } from '../general/mission-sector/mission-sector.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ClientContainerComponent, ClientDasboardComponent, ClientRequestsComponent, ClientProfileComponent, CreateMissionComponent, MissionSectorComponent, MissionDetailsComponent],
  imports: [
    ClientsRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule,
    TagInputModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [MissionService,Authervice]
})
export class ClientsModule { }
