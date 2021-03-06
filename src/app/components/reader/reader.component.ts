import { Component, Input } from '@angular/core';
import { BlogEntry } from '../../model/blog-entry';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent {

  @Input() entry: BlogEntry;
}
