import { UsersService } from "./user/user.service";
import { Module } from "@nestjs/common";

import { UsersController } from "./user/user.controller";


@Module({
    controllers: [ UsersController ],
    components: [ UsersService ]
})
export class ApplicationModule {}
