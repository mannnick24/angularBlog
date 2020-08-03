import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BlogEntry } from '../../core/blog-entry';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  @Input() entry: BlogEntry;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges( changes: SimpleChanges): void {
    console.log( changes );
  }
}
