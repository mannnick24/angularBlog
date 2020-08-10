import { BlogEntryService } from './blog-entry.service';
import { BlogEntryQuery } from './blog-entry-query';
import { BlogEntry } from '../model/blog-entry';
import { Topic } from '../model/Topic';
import { Injectable } from '@angular/core';
import { TypedJSON } from 'typedjson';
import { ConfigService } from './config.service';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogEntrySampleService } from './blog-entry-sample.service';

const  BLOG_KEY = "blog-entry";
const TOPIC_KEY = "blog-topic";

@Injectable()
export class BlogEntryLocalStorageService extends BlogEntryService{

    private  topicSerializer = new TypedJSON( Topic );
    private  blogEntrySerializer = new TypedJSON( BlogEntry );
    // read write observable entry cache
    private entries = new BehaviorSubject<BlogEntry[]>([]);
    private dataStore: { entries: BlogEntry[] } = { entries: [] };

    constructor(
        private localStorage: LocalStorageService,
        private configService: ConfigService,
        blogEntrySampleService: BlogEntrySampleService ) {

        super( blogEntrySampleService );
        //this.localStorage.removeItem( BLOG_KEY );
        this.loadEntries();
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

    // should we have a service ready flag?
    private loadEntries(): void {
        this.localStorage.getItem( BLOG_KEY ).subscribe(
            entryString => {
                const storedEntries = this.blogEntrySerializer.parseAsArray( entryString );

                if ( storedEntries ) {
                    this.dataStore.entries = storedEntries;
                }
                else {
                    this.initStore();
                }
                this.entries.next( this.dataStore.entries );
            },
            error => {
                console.log( `failed to load entries ${error}` );
            }
        );
    }

    private initStore() {
        this.dataStore.entries = [];

        if ( this.configService.get( ConfigService.SAMPLES_PROP ) ) {
            this.addSamples();
        }
    }

    getEntries( query?: BlogEntryQuery ): Observable<BlogEntry[]> {
        return this.entries.asObservable();
    }

    // this needs work... stringify everything each time?
    // must be a better way
    addEntry( entry: BlogEntry ): void {
        this.dataStore.entries.push( entry );
        const failHandler = () => {
            // pop the failed update (race condition may not be last)
            const index = this.dataStore.entries.indexOf( entry );
            this.dataStore.entries.splice( index, 1 );
        };
        this.persistStore( failHandler );
    }

    removeEntry( entry: BlogEntry ): BlogEntry {
        const storeIndex = this.dataStore.entries.indexOf( entry );
        if ( storeIndex === -1 )
        {
            return null;
        }
        this.dataStore.entries.splice( storeIndex, 1 );
        this.persistStore();
        return entry;
    }

    editEntry( entry: BlogEntry ): void {
        throw new Error("Method not implemented.");
    }

    private persistStore( handleError?: Function ) {
        const dataStoreString = this.blogEntrySerializer.stringifyAsArray( this.dataStore.entries );
        this.localStorage.setItem( BLOG_KEY, dataStoreString ).subscribe(
            _ => {
                this.entries.next( this.dataStore.entries );
            },
            error => {
                console.log( `failed to persist store ${error}` );
                if ( handleError ) {
                    handleError.apply( this );
                }
            }
        );
    }
}