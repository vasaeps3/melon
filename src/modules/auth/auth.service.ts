import { Component } from "@nestjs/common";
import { Repository } from "typeorm";

import { Role } from "../roles/role.entity";
import { User } from "../users/user.entity";
import { DatabaseService } from "../database/database.service";
import { UserNotFoundException } from "../users/user.not-found.exception";


@Component()
export class AuthService {

    constructor(private databaseService: DatabaseService) {
    }

    protected get repository(): Promise<Repository<User>> {
        return this.databaseService.getRepository(User);
    }

    public async getRolesByUserId(userId: number): Promise<Role[]> {
        let user: User = await (await this.repository)
            .createQueryBuilder("user")
            .where("user.id=:userId")
            .leftJoinAndSelect("user.roles", "roles")
            .setParameter("userId", userId)
            .getOne();

        if (!user) {
            throw new UserNotFoundException();
        }

        return user.roles;
    }
}
