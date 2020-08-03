import { BlogEntryService } from './blog-entry.service';
import { BlogEntryQuery } from './blog-entry-query';
import { BlogEntry } from './blog-entry';
import { Topic } from './Topic';
import { Injectable } from '@angular/core';
import { TypedJSON } from 'typedjson';
import { ConfigService } from './config.service';

const  BLOG_KEY = "blog-entry";
const TOPIC_KEY = "blog-topic";

@Injectable()
export class BlogEntryLocalStorageService extends BlogEntryService{

    private localStorage : Storage = window.localStorage;
    private  topicSerializer = new TypedJSON( Topic );
    private  blogEntrySerializer = new TypedJSON( BlogEntry );

    constructor( configService: ConfigService ) {
        super();
        if ( typeof(Storage) === "undefined" ) {
            throw new Error( "sorry browser storage is not available" );
        }
        if ( configService.get( ConfigService.SAMPLES ) && this.getEntries().length === 0 )
        {
            this.addEntry( BlogEntry.sample1() );
            this.addEntry( BlogEntry.sample2() );
        }
    }

    getTopics(): Topic[] {
        const topicArrayString = this.localStorage.getItem( TOPIC_KEY );
        if ( topicArrayString )
        {
            const topicArray = this.topicSerializer.parseAsArray( topicArrayString );
            return topicArray.map( item => new Topic( item.key ) );
        }
    }
    addTopic(topic: Topic): void {
        const topics: Topic[] = this.getTopics();
        topics.push( topic );
        this.localStorage.setItem( TOPIC_KEY, this.topicSerializer.stringifyAsArray( topics ) );
    }
    removeTopic(topic: Topic): Topic {
        throw new Error("Method not implemented.");
    }
    getEntries( query?: BlogEntryQuery ): BlogEntry[] {
        const blogArrayString = this.localStorage.getItem( BLOG_KEY );
        if ( blogArrayString )
        {
            return this.blogEntrySerializer.parseAsArray( blogArrayString );
        }
        return [];
    }
    addEntry( entry: BlogEntry ): void {
        const entries: BlogEntry[] = this.getEntries();
        entries.push( entry );
        this.localStorage.setItem( BLOG_KEY, this.blogEntrySerializer.stringifyAsArray( entries ) );
    }
    removeEntry( entry: BlogEntry ): BlogEntry {
        throw new Error("Method not implemented.");
    }
    editEntry( entry: BlogEntry ): void {
        throw new Error("Method not implemented.");
    }
}