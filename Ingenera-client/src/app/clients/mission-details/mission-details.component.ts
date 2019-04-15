import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services'
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';
@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss']
})
export class MissionDetailsComponent implements OnInit {
  missionId
  isSaved = false
  missionData = {}
  constructor(
    private route: ActivatedRoute,
    private missionSVC: MissionService) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.missionId = params['id'];
        this.getMissionDetails()
      }
    });
  }
  ngOnInit() {

  }
  getMissionDetails() {
    this.missionSVC.getMissionsById(this.missionId).then(({ data }) => {
      console.log('missionDetails: ', data)
      this.missionData = data[0]
      this.isSaved = data[0].status == '0'
    })
  }

  onPublishMission(mission) {
    let updatedMission = { id: mission._id, status: 1 }
    this.missionSVC.updateMission(updatedMission).then(data => {
      if (data.status == 200) {
        this.isSaved = false
      }
    })
  }
}
