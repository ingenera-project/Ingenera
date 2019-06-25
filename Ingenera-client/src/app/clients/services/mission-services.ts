import { Injectable } from '@angular/core';
import axios from '../../../../e2e/src/api'
@Injectable()
export class MissionService {


    constructor() { }
    create(mission) {
        console.log('create new mission', mission)
        return axios.post('/mission/create', mission)
    }

    GetMissionsCountSummary(userId){
        return axios.get(`/mission/dashboardSumary/${userId}`)
    }
    getMissionsByStatus(statusId, p, userId) {
        return axios.get(`/mission/client/${userId}/status/${statusId}?count=10&page=${p}`)
    }
    getMissionsById(missionId) {
        return axios.get(`/mission/misisonById/${missionId}`)
    }

    updateMission(mission) {
        return axios.post(`/mission/update`, mission)
    }

    getAllMissionsByClient(userId,p) {
        return axios.get(`/mission/allMissionsByUserId/${userId}?count=10&page=${p}`)
    }

}