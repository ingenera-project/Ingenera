import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable()
export class MissionService {


    constructor() { }

    create(mission) {
        console.log('create new mission', mission)
        return axios.post('api/mission/create', mission)
    }


    getAll(statusId) {
        console.log('getMissions with status,', statusId)

    }
}