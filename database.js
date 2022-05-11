const pg = require('pg');
let db = {
    user: 'postgres',
    host: 'localhost',
    database: 'ihsadbb',
    password: 'sarakpi',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
}
var database = new pg.Pool(db);
var client = new pg.Client(db);
module.exports = {database,client};