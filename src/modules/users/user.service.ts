import * as _ from "lodash";
import * as crypto from "crypto";
import { Component } from "@nestjs/common";
import { Repository } from "typeorm";

import { User } from "./user.entity";
import { Service } from "../../common/service.interface";
import { ServiceBase } from "../../common/base.service";
import { DatabaseService } from "../database/database.service";


@Component()
export class UserService extends ServiceBase<User> implements Service<User> {

    constructor(private databaseService: DatabaseService) {
        super();
    }

    protected get repository(): Promise<Repository<User>> {
        return this.databaseService.getRepository(User);
    }

    public async add(user: User): Promise<User> {
        if (user.password) {
            user.password = this.encryptPassword(user.password);
        }

        return super.add(user);
    }

    public async getAll(): Promise<User[]> {
        let users: User[] = await super.getAll();

        return _.map(users, user => _.omit(user, ["password"]));
    }

    private encryptPassword(password): string {
        return crypto.createHash("sha1").update(password).digest("hex");
    }

}
