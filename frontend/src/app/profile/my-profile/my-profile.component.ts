import { Component } from '@angular/core';
import { User } from '../../Models/user.model';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  userProfile!: User

  constructor(private userService: UserService){
    this.userService.getUserProfile().subscribe((response) => {
      this.userProfile = response
      console.log(this.userProfile)
    })
  }

}
