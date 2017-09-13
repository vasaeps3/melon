import { Module, MiddlewaresConsumer } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { DatabaseConfig } from "../database/database.config";
import { DatabaseModule } from "../database/database.module";
import { DevDatabaseConfig } from "../database/dev.database.config";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    modules: [DatabaseModule, AuthModule],
    controllers: [RoleController],
    components: [
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
