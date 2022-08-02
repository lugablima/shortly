import "../setup.js";
import pg from "pg";

const { Pool } = pg;

const databaseConfigProduction = {
  connectionString: process.env.DATABASE_URL,
  ss1: {
    rejectUnauthorized: false,
  },
};

const databaseConfigDev = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
};

const databaseConfig = process.env.NODE_ENV === "development" ? databaseConfigDev : databaseConfigProduction;

const connection = new Pool(databaseConfig);

export default connection;
