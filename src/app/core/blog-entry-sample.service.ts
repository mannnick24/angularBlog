import { Injectable } from "@angular/core";
import { UserService } from './user.service';
import { BlogEntry } from './blog-entry';
import { Topic } from './Topic';

@Injectable()
export class BlogEntrySampleService {

    private readonly _samples: BlogEntry[];

    constructor( private userService: UserService ) {
        this._samples = [
            this.sample1(),
            this.sample2() ];
    }

    private sample1() {
        const sampleEntry = new BlogEntry();
        sampleEntry.user =  this.userService.getUser( "Sarah" );
        sampleEntry.title = "Emily and Mum";
        sampleEntry.topics.push( new Topic( "family" ) );
        sampleEntry.summary = "A day at the new forest";
        sampleEntry.imagePath = "/assets/sample1.jpg";
        sampleEntry.body = "Looking windswept and beautiful!";
        return sampleEntry;
    }

    private sample2() {
        const sampleEntry = new BlogEntry();
        sampleEntry.user =  this.userService.getUser( "Nick" );
        sampleEntry.title = "Molly and Dad";
        sampleEntry.topics.push( new Topic( "family" ) );
        sampleEntry.imagePath = "/assets/sample2.jpg";
        sampleEntry.summary = "photo me";
        sampleEntry.body = "Having fun getting a passport photo in the post office when they were trying to close";
        return sampleEntry;
    }

    samples() {
        return this._samples.slice();
    }
}