import { BlogEntry } from './blog-entry';
import { BlogEntryQuery } from './blog-entry-query';
import { Topic } from './Topic';
import { Injectable, forwardRef } from '@angular/core';
import { BlogEntryLocalStorageService } from './blog-entry-local-storage.service';

@Injectable()
export abstract class BlogEntryService {
    public abstract getEntries( query?: BlogEntryQuery ) : BlogEntry[];
    public abstract addEntry( entry: BlogEntry ): void;
    public abstract removeEntry( entry: BlogEntry ): BlogEntry;
    public abstract editEntry( entry: BlogEntry ): void;

    public abstract getTopics() : Topic[];
    public abstract addTopic( topic: Topic ): void;
    public abstract removeTopic( topic: Topic ): Topic;
}