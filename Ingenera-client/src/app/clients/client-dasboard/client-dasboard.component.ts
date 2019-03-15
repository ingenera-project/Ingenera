import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionService } from '../services'

@Component({
  selector: 'app-client-dasboard',
  templateUrl: './client-dasboard.component.html',
  styleUrls: ['./client-dasboard.component.scss']
})
export class ClientDasboardComponent implements OnInit {
  activeStatus = '0'
  constructor(private router: Router, private missionSVC: MissionService) { }

  ngOnInit() {
  }

  goToMission() {
    this.router.navigate(['client/newMission'])
  }
  getMissions(missionStatusID) {
    this.activeStatus = missionStatusID
    this.missionSVC.getAll(missionStatusID)
  }

}
