import { Injectable } from '@angular/core';
import axios from '../../../../e2e/src/api'
@Injectable()
export class MissionService {


    constructor() { }
    create(mission) {
        console.log('create new mission', mission)
        return axios.post('/mission/create', mission)
    }


    getMissionsByStatus(statusId, userId) {
        return axios.get(`/mission/client/${userId}/status/${statusId}`)
    }
    getMissionsById(missionId) {
        return axios.get(`/mission/misisonById/${missionId}`)
    }

    updateMission(mission) {
        return axios.post(`/mission/update`, mission)
    }

    getAllMissionsByClient(userId) {
        return axios.get(`/allMissionsById/${userId}`)
    }

}