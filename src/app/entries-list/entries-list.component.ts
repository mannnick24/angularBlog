import { Component, OnInit } from '@angular/core';
import { EntriesBase } from '../core/entries-base';
import { BlogEntryService } from '../core/blog-entry.service';
import { BlogEntrySelectedService } from '../core/blog-entry-selected.service';
import { BlogEntry } from '../core/blog-entry';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.css']
})
export class EntriesListComponent extends EntriesBase implements OnInit {

  constructor(
    protected blogEntryService: BlogEntryService,
    private entrySelectedService: BlogEntrySelectedService ) {

    super( blogEntryService );
  }

  selectEntry( entry: BlogEntry ) {
    this.entrySelectedService.select( entry );
  }

  ngOnInit(): void {
    super.subscribe();
  }
}
