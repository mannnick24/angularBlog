import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogEntry } from '../../core/blog-entry';
import { Topic } from 'src/app/core/Topic';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  @Output() done = new EventEmitter<BlogEntry>();

  constructor() {
  }

  topics()
  {
    return Topic.all;
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
    this.done.emit( entry );
  }

  cancelEntry(){
    this.done.emit( null );
  }

  ngOnInit(): void {
  }

}
