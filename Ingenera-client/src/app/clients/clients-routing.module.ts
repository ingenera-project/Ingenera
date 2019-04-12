import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientDasboardComponent, ClientProfileComponent, ClientRequestsComponent, CreateMissionComponent, MissionDetailsComponent } from '../clients'


const routes: Routes = [
  { path: '', component: ClientDasboardComponent },
  { path: 'dashboard', component: ClientDasboardComponent },
  { path: 'profile', component: ClientProfileComponent },
  { path: 'requests', component: ClientRequestsComponent },
  { path: 'newMission', component: CreateMissionComponent },
  { path: 'mission/:id', component: MissionDetailsComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
