import { Repository } from "typeorm";

import { Service } from "./service.interface";
import { EntityBase } from "./base.entity";


export abstract class ServiceBase<T extends EntityBase> implements Service<T> {

    protected abstract get repository(): Promise<Repository<T>>;

    public async add(object: T): Promise<T> {
        return (await this.repository).persist(object);
    }

    public async addAll(objects: T[]): Promise<T[]> {
        return (await this.repository).persist(objects);
    }

    public async getAll(): Promise<T[]> {
        return (await this.repository).find();
    }

    public async getById(id: number): Promise<T> {
        return (await this.repository).findOneById(id);
    }

    public async update(object: T): Promise<T> {
        return (await this.repository).persist(object);
    }

    public async remove(object: T): Promise<T> {
        return (await this.repository).remove(object);
    }

}
