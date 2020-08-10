import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogEntry } from '../../model/blog-entry';
import { Topic } from '../../model/Topic';
import { UserService } from '../../core/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  @Output() done = new EventEmitter<BlogEntry>();
  currentUser: User;
  files: File[] = [];

  constructor( private userService: UserService ) {
  }

  topics()
  {
    return Topic.all;
  }

  onSelect(event) {
    if ( this.files.length > 0 )
    {
      return;
    }
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  saveEntry(
     title: HTMLInputElement,
     summary: HTMLInputElement,
     body: HTMLInputElement,
     topic: HTMLInputElement ){

    // update entry
    const entry = new BlogEntry();
    entry.title = title.value;
    entry.summary = summary.value;
    entry.body = body.value;
    entry.date = Date.now();
    entry.topics.push( new Topic( topic.value ) )
    entry.user = this.currentUser;

    if ( this.files.length === 1 )
    {
      const reader = new FileReader();
      reader.addEventListener( "load", () => {
        // convert image file to base64 string
        entry.imagePath = reader.result as string;
        this.done.emit( entry );
      }, false);
      reader.readAsDataURL(this.files[0]);
    }
  }

  cancelEntry(){
    this.done.emit( null );
  }

  ngOnInit(): void {
    this.userService.currentUser().subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }
}
