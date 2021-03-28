const { Pool } = require("pg");

const pool = new Pool()
// const pool = new Pool({user: 'pearlhamilton', host: 'db', database: 'plant', password:'plantdatabase', port: 5432});

// const pool = new Pool({ database: process.env.PGDATABASE, host:process.env.PGHOST, password:process.env.PGPASSWORD ,user:process.env.PGUSER })
module.exports = pool;

//allows connection to db


// //    environment: 
// - PGUSER= pearlhamilton
// - PGHOST=db
// - PGPASSWORD=plantdatabase
// - PGDATABASE=plant
// - PGPORT=5432