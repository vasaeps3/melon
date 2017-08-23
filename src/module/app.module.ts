import { Module } from "@nestjs/common";

import { UserModule } from "./user/user.module";
import { CategoryModule} from "./category/category.module";


@Module({
    modules: [ UserModule, CategoryModule ],
})

export class ApplicationModule { }
