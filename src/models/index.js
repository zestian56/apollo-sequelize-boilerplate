import Sequelize from "sequelize";
import { dbSettings } from "../config/config";

const { dbURL, host, db, user, password, dialect } = dbSettings;
const sequelizeOptions = {
  dialect: dialect,
  host: host
};
const sequelize = Boolean(dbURL)
  ? new Sequelize(dbURL, sequelizeOptions)
  : new Sequelize(db, user, password, sequelizeOptions);

const models = {
  User: sequelize.import("./user")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
