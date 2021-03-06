import { BlogEntryService } from './blog-entry.service';
import { BlogEntryQuery } from './blog-entry-query';
import { BlogEntry } from '../model/blog-entry';
import { Topic } from '../model/Topic';
import { Injectable } from '@angular/core';
import { never, Observable } from 'rxjs';

/*
local http node service that will talk to some storage service for us
*/
@Injectable()
export class BlogEntryRemoteStorageService extends BlogEntryService{
    getEntries(query?: BlogEntryQuery): Observable<BlogEntry[]> {
        return never();
    }
    addEntry(entry: BlogEntry): void {
        throw new Error("Method not implemented.");
    }
    removeEntry(entry: BlogEntry): BlogEntry {
        throw new Error("Method not implemented.");
    }
    editEntry(entry: BlogEntry): void {
        throw new Error("Method not implemented.");
    }
    getTopics(): Topic[] {
        throw new Error("Method not implemented.");
    }
    addTopic(topic: Topic): void {
        throw new Error("Method not implemented.");
    }
    removeTopic(topic: Topic): Topic {
        throw new Error("Method not implemented.");
    }
}