import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RetiNews';

  constructor(
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile();
  }
}