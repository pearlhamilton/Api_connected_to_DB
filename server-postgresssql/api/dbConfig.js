const { Pool } = require("pg");

// const pool = new Pool()
const pool = new Pool({user: 'pearlhamilton', host: 'db', database: 'plant', password:'plantdatabase', port: 5432});

module.exports = pool;

//allows connection to db


// //    environment: 
// - PGUSER= pearlhamilton
// - PGHOST=db
// - PGPASSWORD=plantdatabase
// - PGDATABASE=plant
// - PGPORT=5432