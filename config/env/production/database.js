const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(config.host),
        port: env(config.port),
        database: env(config.database),
        username: env(config.user),
        password: env(config.password),
      },
      options: {
        ssl: true,
      },
    },
  },
});
