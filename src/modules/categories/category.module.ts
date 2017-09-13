import { MiddlewaresConsumer, Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { DatabaseModule } from "../database/database.module";
import { DatabaseConfig } from "../database/database.config";
import { CategoryService } from "./category.service";
import { DevDatabaseConfig } from "../database/dev.database.config";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { CategoryController } from "./category.controller";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    modules: [DatabaseModule, AuthModule],
    controllers: [CategoryController],
    components: [
        CategoryService,
        { provide: DatabaseConfig, useClass: DevDatabaseConfig },
    ],
})
export class CategoryModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(AuthorizeMiddleware).forRoutes(CategoryController)
            .apply(LoggingMiddleware).forRoutes(CategoryController)
            .apply(AuthenticateMiddleware).with(["admin"]).forRoutes(CategoryController)
            ;
    }
}
