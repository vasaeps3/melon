import { MiddlewaresConsumer, Module } from "@nestjs/common";

import { AuthMiddleware } from "../../middleware/auth.middleware";
import { CategoryService } from "./category.service";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { CategoryController } from "./category.controller";


@Module({
    controllers: [CategoryController],
    components: [CategoryService],
})
export class CategoryModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(LoggingMiddleware).forRoutes(CategoryController)
            .apply(AuthMiddleware).forRoutes(CategoryController)
            ;
    }
}
