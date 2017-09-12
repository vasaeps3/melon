import { Entity, Column } from "typeorm";

import { EntityBase } from "../../common/base.entity";


@Entity()
export class Role extends EntityBase {

    @Column({
        "unique": true
    })
    public code: string;

    @Column({
        "unique": true
    })
    public name: string;

}
