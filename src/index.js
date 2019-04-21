import { startServer } from "./server/server";
import { serverSettings } from "./config/config";
import models, { sequelize } from "./models";

process.on("uncaughtException", err => {
  console.error("Unhandled Exception", err);
});
process.on("uncaughtRejection", (err, promise) => {
  console.error("Unhandled Rejection", err);
});

const main = async () => {
  await sequelize.sync();
  const server = await startServer({
    ...serverSettings
  },models);
  console.log(`Server listening on ${server.host}:${server.port}`);
};

main();
