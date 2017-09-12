import { Module, MiddlewaresConsumer } from "@nestjs/common";

import { AuthService } from "../auth/auth.service";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { DatabaseConfig } from "../database/database.config";
import { DatabaseModule } from "../database/database.module";
import { DevDatabaseConfig } from "../database/dev.database.config";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    modules: [DatabaseModule],
    controllers: [RoleController],
    components: [
        AuthService,
        RoleService,
        { provide: DatabaseConfig, useClass: DevDatabaseConfig }
    ],
})
export class RoleModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(AuthorizeMiddleware).forRoutes(RoleController)
            .apply(LoggingMiddleware).forRoutes(RoleController)
            .apply(AuthenticateMiddleware).with(["admin"]).forRoutes(RoleController)
            ;
    }
}
