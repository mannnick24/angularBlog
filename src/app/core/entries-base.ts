import { BlogEntryService } from './blog-entry.service';
import { BlogEntrySelectedService } from './blog-entry-selected.service';
import { BlogEntry } from './blog-entry';

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