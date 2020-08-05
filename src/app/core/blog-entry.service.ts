import { BlogEntry } from './blog-entry';
import { BlogEntryQuery } from './blog-entry-query';
import { Topic } from './Topic';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BlogEntryService {
    public abstract getEntries( query?: BlogEntryQuery ) : Observable<BlogEntry[]>;
    public abstract addEntry( entry: BlogEntry ): void;
    public abstract removeEntry( entry: BlogEntry ): BlogEntry;
    public abstract editEntry( entry: BlogEntry ): void;

    public abstract getTopics() : Topic[];
    public abstract addTopic( topic: Topic ): void;
    public abstract removeTopic( topic: Topic ): Topic;
}