import { Component, Input } from '@angular/core';
import { BlogEntry } from '../core/blog-entry';
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent {
  @Input() entries: BlogEntry[];
}
