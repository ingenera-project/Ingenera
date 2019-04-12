import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services'
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss']
})
export class MissionDetailsComponent implements OnInit {
  missionId: number
  constructor(
    private route: ActivatedRoute,
    private missionSVC: MissionService) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.missionId = +params['id'];
      }
    });
  }
  ngOnInit() {
    this.getMissionDetails()
  }
  getMissionDetails() {
    this.missionSVC.getMissionsById(this.missionId).then(data => {
      console.log('missionDetails: ', data)
    })
  }
}
