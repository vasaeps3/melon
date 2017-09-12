import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { RoleModule } from "../roles/role.module";
import { UserModule } from "../users/user.module";
import { AuthService } from "../auth/auth.service";
import { CategoryModule } from "../categories/category.module";


@Module({
    modules: [
        UserModule,
        CategoryModule,
        RoleModule
    ],
})
export class ApplicationModule { }
