import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../core/User';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() newBlog = new EventEmitter();
  selectedUser: User;
  users: User[];

  constructor( private userService: UserService ) {
    // currently static
    this.users = this.userService.getUsers();
    this.userService.currentUser().subscribe( user => {
      this.selectedUser = user;
    } );
  }

  userChanged( user: User )
  {
    this.userService.setCurrentUser( user );
  }

  toggleNewEntry()
  {
    this.newBlog.emit();
  }

  ngOnInit(): void {
  }
}
