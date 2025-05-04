import fs from 'fs';
import db from './db_conn.js';
import getPath from '../utils/getPath.js';
// While it currently doesn't seed, it just resets the db with the schema in the same directory
async function seed() {
    try {
        const schema = fs.readFileSync(getPath('src/db/schema.sql'), 'utf-8');
        await db.query(schema);
        console.log('Database reset');
    }
    catch (err) {
        console.error('Error while seeding', err);
    }
    finally {
        process.exit();
    }
}
;
seed();
