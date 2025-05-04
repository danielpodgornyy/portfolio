import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Gives me the choice between running locally or via a connectionString
const pool = new Pool(
  process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
  }
);

export default pool;

