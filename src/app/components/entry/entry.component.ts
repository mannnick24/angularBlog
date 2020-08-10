import { Component, Input } from '@angular/core';
import { BlogEntry } from '../../model/blog-entry';
import { BlogEntrySelectedService } from '../../core/blog-entry-selected.service';
import { BlogEntryService } from '../../core/blog-entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @Input() entry: BlogEntry;

  constructor(
    private entrySelectedService: BlogEntrySelectedService,
    private entryService: BlogEntryService ) {}

  selectEntry( entry: BlogEntry ) {
    this.entrySelectedService.select( entry );
  }

  removeEntry( entry: BlogEntry ) {
    this.entryService.removeEntry( entry );
    this.entrySelectedService.select( null );
  }
}
