import { Module } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { DatabaseModule } from "../database/database.module";


@Module({
    modules: [DatabaseModule],
    components: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }
