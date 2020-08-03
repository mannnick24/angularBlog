import { UserService } from './user-service';
import { User } from './User';

export class UserDemoService implements UserService {
    getUsers(): import("./User").User[] {
        throw new Error("Method not implemented.");
    }
    addUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    removeUser(user: User): User {
        throw new Error("Method not implemented.");
    }
}