const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(config.DATABASE_HOST),
        port: env(config.DATABASE_PORT),
        database: env(config.DATABASE_NAME),
        username: env(config.DATABASE_USERNAME),
        password: env(config.DATABASE_PASSWORD),
      },
      options: {
        ssl: true,
      },
    },
  },
});
