import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Profile } from "../models/profile";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProfileService {

    public profile$: BehaviorSubject<Profile> = new BehaviorSubject({ role: '', user: '' });

    constructor(
        private http: HttpClient
    ) { }

    public getProfile() {
        return this.http.get<Profile>("../../assets/profile-data.json")
            .subscribe(data => {
                this.profile$.next(data);
            });
    }
}