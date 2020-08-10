import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable()
export class UserService {

    private static Dad = new User( "Nick", "Dad", new Date( 1970, 5 ) );
    private static Mum = new User( "Sarah", "Mum", new Date( 1974, 11 ) );
    private static Em = new User( "Emily", "Silly Goose", new Date( 2007, 5 ) );
    private static Moodles = new User( "Molly", "Moodles", new Date( 2010, 5 ) );
    private static Neo = new User( "Neo", "kitten", new Date( 2017, 1 ) );
    private static Charlie = new User( "Charlie", "Chindrips", new Date( 2020, 4 ) );

    private static users = [
        UserService.Dad,
        UserService.Mum,
        UserService.Em,
        UserService.Moodles,
        UserService.Charlie,
        UserService.Neo
    ];

    private _user: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor() {
        this._user.next( UserService.Dad );
    }

    public getUsers(): User[] {
        return UserService.users;
    }

    getUser( name: string ) {
        return UserService.users.find( user => user.name === name );
    }

    currentUser() {
        // only non null
        return this._user.asObservable().pipe( filter( user => !!user ) );
    }

    setCurrentUser(user:User) {
        this._user.next(user);
    }
}