import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { BlogEntry } from '../core/blog-entry';
import { BlogEntrySelectedService } from '../core/blog-entry-selected.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @Input() entry: BlogEntry;

  constructor( private entrySelectedService: BlogEntrySelectedService ) {}

  selectEntry( entry: BlogEntry ) {
    this.entrySelectedService.select( entry );
  }
}
