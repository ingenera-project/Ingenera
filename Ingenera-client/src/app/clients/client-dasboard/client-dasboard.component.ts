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
  activeStatus = '-1' //all
  missions: any
  p = 1;
  pageSize = 20;
  constructor(
    private router: Router,
    private missionSVC: MissionService,
    private _Auth: Authervice
  ) {
  }

  ngOnInit() {
 // this.getAllMissions(this.activeStatus)
  }
  goToMission() {
    this.router.navigate(['client/newMission'])
  }

  getAllMissions(missionStatusID){
    const userId = this._Auth.getUser().id
    this.activeStatus = missionStatusID
    this.missionSVC.getAllMissionsByClient(userId).then(({ data }) => {
      this.missions = data
    })
      .catch(err => {
        console.log(err)
      })
  } 
  
  getMissionsByStatus(missionStatusID) {
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
    console.log(mission._id)
    this.router.navigate(['/client/mission', mission._id]);

  }

  onPageChange(number: number) {
    console.log('change to page', number);
    this.p = number;
}

}
