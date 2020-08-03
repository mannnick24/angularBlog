import { User } from './User';



export abstract class UserService {
    public abstract getUsers(): User[];
    public abstract addUser( user: User ): void;
    public abstract removeUser( user: User ): User
}