import { BlogEntryService } from '../core/blog-entry.service';
import { BlogEntrySelectedService } from '../core/blog-entry-selected.service';
import { BlogEntry } from '../model/blog-entry';

export abstract class EntriesBase {
    public entries: BlogEntry[];

    constructor( protected blogEntryService: BlogEntryService ) {}

    public subscribe() {
        this.blogEntryService.getEntries().subscribe(
            entries => {
              this.entries = entries;
            },
            error => {
              console.log( `problem retrieving entries ${error}` );
            }
          );
    }
}