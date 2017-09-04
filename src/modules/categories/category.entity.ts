import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public description: string;

}
