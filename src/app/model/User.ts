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
}