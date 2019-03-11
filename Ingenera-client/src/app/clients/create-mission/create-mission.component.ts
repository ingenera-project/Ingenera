import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { MissionService } from '../services'

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent implements OnInit {
  value: any;
  display: string;
  phase = '0';
  location = '0';
  expYears = '0';
  missionForm: FormGroup;
  error: string;
  public items = [
    { display: 'Java', value: 1 }
  ];

  constructor(private router: Router,
    private fb: FormBuilder,
    private missionSVC: MissionService) { }



  ngOnInit() {
    this.missionForm = this.fb.group({
      titile: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
    });
  }

  onItemAdded(e) {
    console.log(e)
  }
  onTextChange(e) {
    console.log(e)
  }

  onPhaseSelected(phaseId) {
    this.phase = phaseId
  }
  onLocationSelected(locationId) {
    this.location = locationId

  }
  onExperianceSelected(yearsRangeId) {
    this.expYears = yearsRangeId
  }

  onMissionCreated() {
    let newMission = {
      ...this.missionForm.value,
      phase: this.phase,
      location: this.location,
      expYears: this.expYears,
      tags: ['tag1', 'tag2']
    }
    this.missionSVC.create(newMission)
  }

  onMissionSaved() {
    let newMission = {
      ...this.missionForm.value,
      phase: this.phase,
      location: this.location,
      expYears: this.expYears,
      tags: ['tag1', 'tag2']
    };
        this.missionSVC.save(newMission)
  }


  private onTouchedCallback() {

  }
  private onChangeCallback() {

  }
}
