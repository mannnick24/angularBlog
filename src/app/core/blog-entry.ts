import { User } from './User';
import { Topic } from './Topic';

import 'reflect-metadata';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';

@jsonObject
export class BlogEntry{
    @jsonMember
    title: string;

    @jsonMember
    summary: string;

    // should be markup
    @jsonMember
    body: string;

    // TODO pull the image in and store it
    @jsonMember
    imagePath: string;

    @jsonMember
    link: string;

    @jsonArrayMember(Topic)
    topics: Topic[];

    @jsonMember
    user: User;

    @jsonMember
    date: number;

    constructor() {
        this.topics = [];
        this.date = Date.now();
    }

    public shortDate()
    {
        const dateTimeFormat = new Intl.DateTimeFormat(
            'en',
            { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: month }
            ,,{ value: day }
            ,,{ value: year }
        ] = dateTimeFormat .formatToParts( new Date( this.date ) );

        return `${day}-${month}-${year }`;
    }

    public static sample1() {
        const sampleEntry = new BlogEntry();
        sampleEntry.user =  User.Mum;
        sampleEntry.title = "Emily and Mum";
        sampleEntry.topics.push( new Topic( "family" ) );
        sampleEntry.summary = "A day at the new forest";
        sampleEntry.imagePath = "/assets/sample1.jpg";
        sampleEntry.body = "Looking windswept and beautiful!";
        return sampleEntry;
    }

    public static sample2() {
        const sampleEntry = new BlogEntry();
        sampleEntry.user =  User.Dad;
        sampleEntry.title = "Molly and Dad";
        sampleEntry.topics.push( new Topic( "family" ) );
        sampleEntry.imagePath = "/assets/sample2.jpg";
        sampleEntry.summary = "photo me";
        sampleEntry.body = "Having fun getting a passport photo in the post office when they were trying to close";
        return sampleEntry;
    }
}