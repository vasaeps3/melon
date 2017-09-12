import { Module, MiddlewaresConsumer } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { DatabaseConfig } from "../database/database.config";
import { DatabaseModule } from "../database/database.module";
import { DevDatabaseConfig } from "../database/dev.database.config";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    modules: [DatabaseModule],
    controllers: [UserController],
    components: [UserService,
        { provide: DatabaseConfig, useClass: DevDatabaseConfig }
    ],
})
export class UserModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(AuthorizeMiddleware).forRoutes(UserController)
            .apply(LoggingMiddleware).forRoutes(UserController)
            .apply(AuthenticateMiddleware).with(["admin"]).forRoutes(UserController)
            ;
    }
}
