import fs from 'fs';

import db from './db_conn.js';
import getPath from '../utils/getPath.js'

async function seed() {
  try {
    const schema = fs.readFileSync(getPath('src/db/schema.sql'), 'utf-8');

    await db.query(schema);

    console.log('Database reset');
  } catch (err) {
    console.error('Error while seeding', err);
  } finally {
    process.exit();
  }
};

seed();


