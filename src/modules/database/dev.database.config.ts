import { Component } from "@nestjs/common";
import { ConnectionOptions } from "typeorm";

import { User } from "../users/user.entity";
import { Category } from "../categories/category.entity";
import { DatabaseConfig } from "./database.config";


@Component()
export class DevDatabaseConfig extends DatabaseConfig {
    public getConfiguration(): ConnectionOptions {
        console.log("-----222----");
        console.log(__dirname + "/../.entity.ts");
        return {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "melondev",
            entities: [
                // any entity file under src/modules
                Category,
                User
            ],
            autoSchemaSync: true,
            logger: "advanced-console",
            logging: "all",
        };
    }
}
