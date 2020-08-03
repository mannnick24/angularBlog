import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { BlogEntry } from '../core/blog-entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit, OnChanges {

  @Input() entries: BlogEntry[];
  @Output() entrySelected = new EventEmitter<BlogEntry>();

  constructor() { }

  onEntrySelected( entry: BlogEntry ) {
    this.entrySelected.emit( entry );
  }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges): void {
    console.log( "entries " + this.entries.length );
    console.log( changes );
  }
}
