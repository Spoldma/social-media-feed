const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "parool", //add your password
    database: "HW4",
    host: "localhost",
    port: "5432"
});

const execute = async(query1, query2) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query1); // executes a query
        await pool.query(query2);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id SERIAL PRIMARY KEY,
        date DATE DEFAULT CURRENT_DATE,
        body VARCHAR(500) NOT NULL
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery1, createTblQuery2).then(result => {
    if (result) {
        console.log('If did not exist, table "users" and "posts" were created');
    }
});

module.exports = pool;