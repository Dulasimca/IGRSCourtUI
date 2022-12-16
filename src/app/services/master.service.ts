import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { AuthService } from "./auth.service";
import { RestapiService } from "./restapi.service";


@Injectable({
    providedIn: 'root'
})

export class MasterService {
    masterData: any = [];
    masterDataAll: any = [];
    userInfo!: User;
    constructor(private _restApiService: RestapiService, private _authService: AuthService) {
        this.userInfo = this._authService.getUserInfo();
     }

     invokeMasterData() {
        this._restApiService.get('Masters/GetMasters').subscribe(response => {
            if (response) {
                this.masterData = response;
                this.masterDataAll = response;
            }
        })
     }

    getMasters() {
        if (this.userInfo.roleid !== 1 && this.masterData.zone_Masters) {
            this.masterData.zone_Masters = this.masterData.zone_Masters.filter((z: any) => {
                return z.zoneid === this.userInfo.zoneid;
            })
        } else if ((this.userInfo.roleid === 3 || this.userInfo.roleid === 4) && this.masterData.district_Masters) {
            this.masterData.district_Masters = this.masterData.district_Masters.filter((d: any) => {
                return d.districtid === this.userInfo.districtid;
            })
        } else if (this.userInfo.roleid === 4 && this.masterData.sro_Masters) {
            this.masterData.sro_Masters = this.masterData.sro_Masters.filter((s: any) => {
                return s.sroid === this.userInfo.sroid;
            })
        }
        return this.masterData;
    }

    getMastersAll() {
        return this.masterDataAll;
    }

}