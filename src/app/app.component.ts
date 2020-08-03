import { Component } from '@angular/core';
import { BlogEntry } from './core/blog-entry';
import { User } from './core/User';
import { BlogEntryService } from './core/blog-entry.service';
import { blogEntryServiceProvider } from './core/blog-entry-service.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // default... needa better way
  currentUser = User.Dad;
  newEntry = false;
  entries: BlogEntry[];
  selectedEntry: BlogEntry;

  constructor( private blogEntryService: BlogEntryService ) {
    this.entries = blogEntryService.getEntries();
    this.selectLastEntry();
  }

  changeUser( user: User ) {
    this.currentUser = user;
  }

  showNewEntry() {
    this.newEntry = !this.newEntry;
  }

  hasEntry()
  {
    return this.entries.length > 0;
  }

  newEntryDone( entry: BlogEntry )
  {
    if ( entry )
    {
      entry.user = this.currentUser;
      this.blogEntryService.addEntry( entry );
      this.selectLastEntry();
    }
    this.newEntry = false;
  }

  selectLastEntry()
  {
    if ( this.hasEntry() )
    {
      this.selectedEntry = this.entries[ this.entries.length - 1 ];
    }
  }

  onEntrySelected( entry: BlogEntry ) {
    this.selectedEntry = entry;
  }
}
