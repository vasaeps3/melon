interface DatabaseConfig {
    database: string;
    username: string;
    password: string;
    host: string;
    // port: number;
    dialect: string;
    logging: boolean | Function;
    force: boolean;
    timezone: string;
}
class DbConfig {
    private _databaseConfig: DatabaseConfig;
    constructor() {
        this._databaseConfig = {
            username: "root",
            password: "",
            database: "melondev",
            host: "localhost",
            // port: 3306,
            dialect: "mysql",
            logging: true,
            force: true,
            timezone: "+00:00"
        };
    }
    public getDatabaseConfig(): DatabaseConfig {
        return this._databaseConfig;
    }
}

export const dbConfig = new DbConfig();
