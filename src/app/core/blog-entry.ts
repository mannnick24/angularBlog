import { User } from './User';
import { Topic } from './Topic';

import 'reflect-metadata';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';
import { UserService } from './user.service';

@jsonObject
export class BlogEntry{
    @jsonMember
    title: string;

    @jsonMember
    summary: string;

    // should be markup
    @jsonMember
    body: string;

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
}