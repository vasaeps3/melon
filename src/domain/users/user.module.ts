import { Module, MiddlewaresConsumer } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { LoggingMiddleware } from "../../middleware/logging.middleware";
import { AuthorizeMiddleware } from "../../middleware/authorize.middleware";
import { AuthenticateMiddleware } from "../../middleware/authenticate.middleware";


@Module({
    controllers: [UserController],
    components: [UserService],
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
