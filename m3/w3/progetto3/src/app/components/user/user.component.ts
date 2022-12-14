import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { NetflixService } from 'src/app/service/netflix.service';
import { HttpClient } from '@angular/common/http';
import { AuthData, AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  profileUser!: AuthData | any;
  profilo!: User | any;

  constructor(private srv:NetflixService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile: any) => (this.profileUser = JSON.stringify(profile.user, null, 2)),
    );
    this.profilo = JSON.parse(this.profileUser || '{}');
  }

}
