import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
export class Topic {

    @jsonMember
    readonly key: string;

    constructor( key: string )
    {
        this.key = key;
    }

    public static fromObjectArray( topicArray ) {
        return topicArray.map( topicObject => new Topic( topicObject.key ) );
    }

    // TODO dynamic
    public static all = [
        new Topic( "Family" ),
        new Topic( "School" ),
        new Topic( "Work" ),
        new Topic( "Holiday" ),
        new Topic( "Pets" ),
        new Topic( "Stoopid" ) ];
}