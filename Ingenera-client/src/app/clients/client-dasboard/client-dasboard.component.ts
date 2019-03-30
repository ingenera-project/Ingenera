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
  activeStatus = '3' //all
  missions: any
  constructor(
    private router: Router,
    private missionSVC: MissionService,
    private _Auth: Authervice
  ) {
  }
  ngOnInit() {
  }
  goToMission() {
    this.router.navigate(['client/newMission'])
  }
  getMissions(missionStatusID) {
    const userId = this._Auth.getUser().id
    this.activeStatus = missionStatusID
    this.missionSVC.getMissionsByStatus(missionStatusID, userId)
      .then(({ data }) => {
        this.missions = data
      })
      .catch(err => {
        console.log(err)
      })
  }
  onMissionSelected(mission) {
    console.log(mission)
  }

}
