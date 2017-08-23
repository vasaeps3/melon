import { HttpException } from "@nestjs/core";
import { Component } from "@nestjs/common";


@Component()
export class UserService {

    private users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Alice Caeiro" },
        { id: 3, name: "Who Knows" },
    ];

    public getAllUsers() {
        return Promise.resolve(this.users);
    }

    public getUser(id: number) {
        const user = this.users.find(u => u.id === id);

        if (!user) {
            throw new HttpException("User not found", 404);
        }

        return Promise.resolve(user);
    }

    public addUser(user) {
        this.users.push(user);
        return Promise.resolve();
    }

}
