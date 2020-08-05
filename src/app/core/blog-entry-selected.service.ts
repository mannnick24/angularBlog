import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BlogEntry } from './blog-entry';

@Injectable()
export class BlogEntrySelectedService {

    private _selected: BehaviorSubject<BlogEntry> = new BehaviorSubject(null);

    selected() {
        // only non null
        return this._selected.asObservable().pipe( filter( lesson => !!lesson ) );
    }

    select(blogEntry:BlogEntry) {
         this._selected.next(blogEntry);
    }
}