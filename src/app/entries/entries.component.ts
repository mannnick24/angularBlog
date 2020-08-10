import { Component, OnInit } from '@angular/core';
import { EntriesBase } from '../core/entries-base';
import { BlogEntryService } from '../core/blog-entry.service';
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent extends EntriesBase implements OnInit {

  constructor( public blogEntryService: BlogEntryService ) {
    super( blogEntryService );
  }

  ngOnInit(): void {
    super.subscribe();
  }
}
