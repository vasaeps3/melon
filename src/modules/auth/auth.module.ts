import { Module } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { DatabaseService } from "../database/database.service";


@Module({
    components: [AuthService]
})

export class AuthModule { }
