import 'reflect-metadata';
import { jsonObject, jsonMember } from 'typedjson';

const MILLISINYEAR = 365 * 24 * 60 * 60 * 1000;

@jsonObject
export class User {
    @jsonMember
    readonly name: string;
    @jsonMember
    readonly description: string;
    @jsonMember
    readonly dob: Date;

    constructor( name: string, description: string, dob: Date ) {
        this.name = name;
        this.description = description;
        this.dob = new Date();
    }

    // TODO mode to service
    public age()
    {
        const age = new Date( Date.now(), this.dob.getTime() );
        return age.getTime() / MILLISINYEAR;
    }

    // TODO make dynamic
    public static Dad = new User( "Nick", "Dad", new Date( 1970, 5 ) );
    public static Mum = new User( "Sarah", "Mum", new Date( 1974, 11 ) );
    public static Em = new User( "Emily", "Silly Goose", new Date( 2007, 5 ) );
    public static Moodles = new User( "Molly", "Moodles", new Date( 2010, 5 ) );

    public static users = [User.Dad, User.Mum, User.Em, User.Moodles];
}