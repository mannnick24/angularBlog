import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../core/User';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() newBlog = new EventEmitter();
  @Output() changeUser = new EventEmitter<User>();

  selectedUser = User.Dad ;
  users = User.users;

  constructor() { }

  userChanged( user: User )
  {
    this.selectedUser = user;
    this.changeUser.emit( this.selectedUser );
  }

  showNewEntry()
  {
    this.newBlog.emit();
  }

  ngOnInit(): void {
  }

}
