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
  AllMissionsTotal: 0;
  SavedTotal: 0
  RunningTotal: 0;
  OpenTotal: 0
  count:0
  constructor(
    private router: Router,
    private missionSVC: MissionService,
    private _Auth: Authervice
  ) {
  }

  ngOnInit() {
    this.GetMissionsCountSummary()
  }
  goToMission() {
    this.router.navigate(['client/newMission'])
  }

  // dahsboard summaru
  GetMissionsCountSummary() {
    this.missionSVC.GetMissionsCountSummary().then(({ data }) => {
      this.AllMissionsTotal = data.all || '0';
      this.SavedTotal = data.saved || '0';
      this.RunningTotal = data.running || '0';
      this.OpenTotal = data.open || '0';
      this.getAllMissions(this.activeStatus)
    })
  }

  // All Missions (All status)
  getAllMissions(missionStatusID) {
    this.activeStatus = missionStatusID
    this.p = 1
    this.getAllListData()
  }
  getAllListData() {
    const userId = this._Auth.getUser().id
    this.missionSVC.getAllMissionsByClient(userId, this.p).then(({ data }) => {
      this.missions = data
      this.count=this.AllMissionsTotal
    })
      .catch(err => {
        console.log(err)
      })
  }

  // Missions By Status (1,2,3)
  getMissionsByStatus(missionStatusID, page) {
    this.activeStatus = missionStatusID
    this.p = 1 // reset pagination
    this.count=missionStatusID==0?this.SavedTotal:missionStatusID==1?this.OpenTotal:this.RunningTotal

    this.getListData(missionStatusID, page)
  }
  getListData(missionStatusID, page) {
    const userId = this._Auth.getUser().id
    this.missionSVC.getMissionsByStatus(missionStatusID, page, userId)
      .then(({ data }) => {
        this.missions = data
        console.log(this.missions)
      })
      .catch(err => {
        console.log(err)
      })
  }


  // Go to mission details
  onMissionSelected(mission) {
    console.log(mission._id)
    this.router.navigate(['/client/mission', mission._id]);
  }

  // Pagination
  onPageChange(number: number) {
    console.log('change to page', number, ' , status:', this.activeStatus);
    this.p = number;
    if (this.activeStatus == '-1') {
      this.getAllListData()
    } else {
      this.getListData(this.activeStatus, this.p)
    }
  }

}
