import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: any[];
  isLoading = true;
 // userService = new UserService();

  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    //this.userSevice.getUsers().then(users => {
    //  this.isLoading = false;
    //  this.users = users; 
    //})
    this.userSevice.getUsers().subscribe( users => {
      this.isLoading = false;
      this.users = users
    })
  }

}
