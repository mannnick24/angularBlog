import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { BlogEntry } from '../../core/blog-entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() entry: BlogEntry;
  @Output() entrySelected = new EventEmitter<BlogEntry>();

  constructor() {
  }

  onEntrySelected() {
    this.entrySelected.emit( this.entry );
  }

  ngOnInit(): void {
  }
}
