import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientDasboardComponent, ClientProfileComponent, ClientRequestsComponent, CreateMissionComponent } from '../clients'


const routes: Routes = [
  { path: '', component: ClientDasboardComponent },
  { path: 'dashboard', component: ClientDasboardComponent },
  { path: 'profile', component: ClientProfileComponent },
  { path: 'requests', component: ClientRequestsComponent },
  { path: 'newMission', component: CreateMissionComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
