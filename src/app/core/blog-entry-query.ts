import { Topic } from '../model/Topic';
import { User } from '../model/User';

export class BlogEntryQuery {
    readonly topics: Topic[] = [];
    readonly users: User[] = [];
    readonly keyWords: string[] = [];

    public addTopic( topic: Topic ) {
        this.topics.push( topic );
        return this;
    }

    public addUser( user: User ) {
        this.users.push( user );
        return this;
    }

    public addKeyWord( keyWord: string ) {
        this.keyWords.push( keyWord );
        return this;
    }
}