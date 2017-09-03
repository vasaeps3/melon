import { MiddlewaresConsumer, Module } from "@nestjs/common";

import { CategoryService } from "./category.service";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { CategoryController } from "./category.controller";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    controllers: [CategoryController],
    components: [CategoryService],
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
