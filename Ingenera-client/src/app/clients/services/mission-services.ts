import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {


    constructor() { }

    create(mission) {
        console.log('create new mission', mission)
        return true
    }

    save(mission) {
        console.log('save new mission', mission)
        return true
    }
    getAll(statusId){
        console.log('getMissions with status,',statusId)

    }
}