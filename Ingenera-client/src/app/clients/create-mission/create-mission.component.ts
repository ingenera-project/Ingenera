import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../toast.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { MissionService } from '../services'
import { Authervice } from '../../authorization/auth.service'
import * as moment from 'moment';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent implements OnInit {
  value: any;
  display: string;
  phase = '0';
  serviceLocation = '0';
  experience = '0';
  missionForm: FormGroup;
  error: string;
  public keywords = [];

  sections = [
    {
      title: 'NTIC', section: [
        { id: 1, name: 'CONCEPTION ELECTRONIQUE' },
        { id: 2, name: 'INFORMATIQUE' },
        { id: 3, name: 'SYSTEMES EMBARQUES' },
        { id: 4, name: 'MECATRONIQUE' },
        { id: 5, name: 'REALITE VIRTUELLE & AUGMENTEE' },
        { id: 6, name: 'CYBERSECURITE' },
      ]
    },
    {
      title: 'DATA SCIENCES', section: [
        { id: 1, name: 'IA & ALGORITHME' },
        { id: 2, name: 'BUSINESS INTELLIGENCE' },
        { id: 3, name: 'BIG DATA' },

      ]
    },
    {
      title: 'TRANSPORT & MOBILITE', section: [
        { id: 1, name: 'AUTOMOBILE' },
        { id: 2, name: 'FERROVIAIRE' },
        { id: 3, name: 'AERONAUTIQUE' },
        { id: 4, name: 'NAVAL' },
      ]
    },
    {
      title: 'MANUFACTURING', section: [
        { id: 1, name: 'R&D' },
        { id: 2, name: 'PRODUCTION' },
        { id: 3, name: 'LOGISTIQUE' },
        { id: 4, name: 'QUALITE' },
        { id: 5, name: 'ACHATS' },
      ]
    }
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private missionSVC: MissionService,
    public toast: ToastService,
    public _Auth: Authervice
  ) {
  }



  ngOnInit() {
    this.missionForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      missionDates: ['', Validators.compose([Validators.required])],
    });

  }

  onItemAdded(e) {
    console.log("check ", e)
    this.keywords.push(e)
    console.log("check keywords", this.keywords)
  }
  onTextChange(e) {
    console.log(e)
  }

  onPhaseSelected(phaseId) {

    this.phase = phaseId
  }
  onLocationSelected(locationId) {

    this.serviceLocation = locationId

  }
  onExperianceSelected(yearsRangeId) {
    this.experience = yearsRangeId
  }

  onMissionCreated() {
    let startDate = moment(this.missionForm.value.missionDates[0]).format('DD-MM-YYYY'),
      endDate = moment(this.missionForm.value.missionDates[1]).format('DD-MM-YYYY')
    var diffDays = moment(endDate, 'DD-MM-YYYY').diff(moment(startDate, 'DD-MM-YYYY'), 'days');
    var days = diffDays
    let newMission = {
      ...this.missionForm.value,
      startDate,
      endDate,
      duration: days,
      phase: this.phase,
      serviceLocation: this.serviceLocation,
      experience: this.experience,
      keywords: this.keywords,
      status: 1,
      userId: this._Auth.getUser().id
    }
    this.missionSVC.create(newMission)
      .then(({ data }) => {
        this.toast.presentToast(data.message)
        this.missionForm.reset()
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  onMissionSaved() {
    let startDate = moment(this.missionForm.value.missionDates[0]).format('DD-MM-YYYY'),
      endDate = moment(this.missionForm.value.missionDates[1]).format('DD-MM-YYYY')
    var diffMonth = moment(endDate, 'DD-MM-YYYY').diff(moment(startDate, 'DD-MM-YYYY'), 'months');
    var months = diffMonth
    let newMission = {
      ...this.missionForm.value,
      startDate,
      endDate,
      duration: months,
      phase: this.phase,
      serviceLocation: this.serviceLocation,
      experience: this.experience,
      keywords: this.keywords,
      status: 0,
      userId: this._Auth.getUser().id
    };
    console.log('newMission', newMission)
    this.missionSVC.create(newMission)
      .then(({ data }) => {
        console.log(data)

        this.toast.presentToast(data.message);
        this.missionForm.reset()
      })
      .catch(err => {
        console.log(err)
      })
  }


  private onTouchedCallback() {

  }
  private onChangeCallback() {

  }
}
