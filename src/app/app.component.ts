import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './core/blog-entry';
import { User } from './core/User';
import { BlogEntryService } from './core/blog-entry.service';
import { BlogEntrySelectedService } from './core/blog-entry-selected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // default... needa better way
  currentUser = User.Dad;
  newEntry = false;
  entries: BlogEntry[] = [];
  selectedEntry: BlogEntry;

  constructor(
    private blogEntryService: BlogEntryService,
    private blogEntrySelectedService: BlogEntrySelectedService ) {
  }

  changeUser( user: User ) {
    this.currentUser = user;
  }

  showNewEntry() {
    this.newEntry = !this.newEntry;
  }

  ngOnInit(): void {
    this.blogEntryService.getEntries().subscribe(
      entries => {
        this.entries = entries;
      },
      error => {
        console.log( `problem retrieving entries ${error}` );
      }
    );

    this.blogEntrySelectedService.selected().subscribe(
      selected => {
        this.selectedEntry = selected;
      } );
  }
}
