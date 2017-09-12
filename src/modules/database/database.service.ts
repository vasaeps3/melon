import { HttpException } from "@nestjs/core";
import { Component, OnModuleInit } from "@nestjs/common";
import { createConnection, Connection, EntityManager, Repository, ObjectType, Entity } from "typeorm";

import { DatabaseConfig } from "./database.config";


@Component()
export class DatabaseService implements OnModuleInit {

    /**
     * A Connection reference which is reused by all consumers of the database service
     */
    private _connection: Connection;

    /**
     * Abstract injection so it is possible to use several databases
     * @param databaseConfig
     */
    constructor(private readonly databaseConfig: DatabaseConfig) { }

    public async onModuleInit() {
        console.log("alarm");
        // this._connection = await createConnection(this.databaseConfig.getConfiguration());
    }

    /**
     * An async getter for the Connection which creates the connection if needed.
     * @returns {Promise<Connection>}
     */
    private get connection(): Promise<Connection> {
        // return this._connection;

        // return the connection if it's been created already
        if (this._connection) {
            return Promise.resolve(this._connection);
        }
        // otherwise create it
        return createConnection(this.databaseConfig.getConfiguration()).then(connection => {
            this._connection = connection;

            return connection;
        }).catch(error => {
            console.log(error);
            throw error;
        });
    }

    /**
     * An async getter for the entity manager.
     *
     * Connects to the database if needed and returns a reference to the EntityManager
     * @returns {Promise<EntityManager>}
     */
    public async getEntityManager(): Promise<EntityManager> {
        return (await this.connection).entityManager;
    }

    /**
     * An async getter for repositories.
     *
     * Connects to the database if needed and returns a reference to a Repository for the specified Entity
     * @param entityClassOrName
     * @returns {Promise<Repository<T>>}
     */
    public async getRepository<T>(entityClassOrName: ObjectType<T> | string): Promise<Repository<T>> {
        return (await this.connection).getRepository<T>(entityClassOrName);
    }
}
