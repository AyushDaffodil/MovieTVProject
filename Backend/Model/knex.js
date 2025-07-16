const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'myProject',
        password: 'myproject',
        database: 'movie_tv_database'
    }
});

module.exports = knex;
