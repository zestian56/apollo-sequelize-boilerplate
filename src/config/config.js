import "dotenv/config";

//Place environment variables here
const { env } = process;

const dbSettings = {
  dbURL: env.DB_URL,
  db: env.DB_NAME,
  host: env.DB_HOSTNAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  dialect: 'mysql'
};

const serverSettings = {
  port: env.PORT,
  host: env.SERVICEHOST,
  secret: env.SECRET
};

const config = {
  serverSettings,
  dbSettings
};

export default config;

export { serverSettings, dbSettings };
