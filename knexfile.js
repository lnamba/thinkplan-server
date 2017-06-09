module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/thinkplan2'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
