import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionService } from '../services'
import { Authervice } from '../../authorization/auth.service'

@Component({
  selector: 'app-client-dasboard',
  templateUrl: './client-dasboard.component.html',
  styleUrls: ['./client-dasboard.component.scss']
})
export class ClientDasboardComponent implements OnInit {
  activeStatus = '0'
  constructor(private router: Router, private missionSVC: MissionService,
  private _Auth:Authervice) { }

  ngOnInit() {
  }

  goToMission() {
    this.router.navigate(['client/newMission'])
  }
  getMissions(missionStatusID) {
    const userId =this._Auth.getUser().id
    this.activeStatus = missionStatusID
    this.missionSVC.getAll(missionStatusID,userId)
  }

}
