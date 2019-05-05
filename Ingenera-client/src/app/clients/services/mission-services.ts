import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class MissionService {


    constructor() { }
    create(mission) {
        console.log('create new mission', mission)
        return axios.post('api/mission/create', mission)
    }


    getMissionsByStatus(statusId,page=1,userId) {
        return axios.get(`api/mission/client/${userId}/status/${statusId}
        ?count=10&page=${page}`)
    }
    getMissionsById(missionId) {
        return axios.get(`api/mission/misisonById/${missionId}`)
    }

    updateMission(mission) {
        return axios.post(`api/mission/update`,mission)
    }

    getAllMissionsByClient(userId,page=1){
        return axios.get(`api/mission/allMissionsByUserId/${userId}?count=10&page=${page}`)
    }
    GetMissionsCountSummary(userId){
        return axios.get(`api/mission/dashboardSumary/${userId}`)
    }

}