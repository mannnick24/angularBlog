import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './core/blog-entry';
import { BlogEntryService } from './core/blog-entry.service';
import { BlogEntrySelectedService } from './core/blog-entry-selected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showNewEntry = false;
  entries: BlogEntry[] = [];
  selectedEntry: BlogEntry;

  constructor(
    private blogEntryService: BlogEntryService,
    private blogEntrySelectedService: BlogEntrySelectedService ) {
  }

  toggleNewEntry() {
    this.showNewEntry = !this.showNewEntry;
  }

  newEntry( entry: BlogEntry ) {
    this.blogEntryService.addEntry( entry );
    this.toggleNewEntry();
  }

  ngOnInit(): void {
    this.blogEntrySelectedService.selected().subscribe(
      selected => {
        this.selectedEntry = selected;
      } );
  }
}
