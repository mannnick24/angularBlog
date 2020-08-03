import { BlogEntryService } from './blog-entry.service';
import { BlogEntryQuery } from './blog-entry-query';
import { BlogEntry } from './blog-entry';
import { Topic } from './Topic';
import { Injectable } from '@angular/core';

/*
local http node service that will talk to some storage service for us
*/
@Injectable()
export class BlogEntryRemoteStorageService extends BlogEntryService{
    getEntries(query?: BlogEntryQuery): BlogEntry[] {
        return [];
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
    getTopics(): import("./Topic").Topic[] {
        throw new Error("Method not implemented.");
    }
    addTopic(topic: Topic): void {
        throw new Error("Method not implemented.");
    }
    removeTopic(topic: Topic): Topic {
        throw new Error("Method not implemented.");
    }
}