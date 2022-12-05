import { Injectable } from "@angular/core";
import { RestapiService } from "./restapi.service";


@Injectable({
    providedIn: 'root'
})

export class MasterService {
    masterData: any = [];
    constructor(private _restApiService: RestapiService) { }
    
    getMasters() {
        this._restApiService.get('Masters/GetMasters').subscribe(response => {
            if(response) {
                this.masterData = response;
            }
        })
        return this.masterData;
    }

}