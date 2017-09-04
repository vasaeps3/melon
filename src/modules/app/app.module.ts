import { Module } from "@nestjs/common";

import { UserModule } from "../users/user.module";
import { CategoryModule } from "../categories/category.module";


@Module({
    modules: [UserModule, CategoryModule],
})
export class ApplicationModule { }
