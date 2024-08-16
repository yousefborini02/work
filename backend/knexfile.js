module.exports = {
  development: {
    client: 'pg', 
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'Admin1234',
      database: 'Election'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
};