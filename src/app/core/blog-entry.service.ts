import { BlogEntry } from '../model/blog-entry';
import { BlogEntryQuery } from './blog-entry-query';
import { Topic } from '../model/Topic';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogEntrySampleService } from './blog-entry-sample.service';

@Injectable()
export abstract class BlogEntryService {

    constructor( private blogEntrySampleService: BlogEntrySampleService ) {}

    public abstract getEntries( query?: BlogEntryQuery ) : Observable<BlogEntry[]>;
    public abstract addEntry( entry: BlogEntry ): void;
    public abstract removeEntry( entry: BlogEntry ): BlogEntry;
    public abstract editEntry( entry: BlogEntry ): void;

    public abstract getTopics() : Topic[];
    public abstract addTopic( topic: Topic ): void;
    public abstract removeTopic( topic: Topic ): Topic;

    public addSamples() {
        const samples = this.blogEntrySampleService.samples();
        samples.forEach( sample => {
            this.addEntry( sample );
        });
    }
}