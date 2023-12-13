const {createPool} =require('mysql');

const pool= createPool({
    host:"localhost",
    user:"root",
    password:"312004mk",
    database:"users_astro",
    connectionLimit:10
});


module.exports=pool;