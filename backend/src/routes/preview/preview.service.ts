import db from '../../db/db_conn.js';
import readJSONArray from '../../utils/readJSONArray.js';

import { Preview } from './preview.model.js';

// Just finds the newest content from the database for both blog posts and projects
export async function getNewestContent(): Promise<Array<Preview>> {
  try {
    const query = `SELECT name, category, description, created FROM projects
                   UNION ALL
                   SELECT name, category, description, created FROM blog
                   ORDER BY created ASC
                   LIMIT 3`

    const res = await db.query(query);

    // Convert date object to a short data for each SlimPostInfo object EX: MM/DD/YYYY
    res.rows.forEach((row) => {
      row.created = row.created.toLocaleDateString('en-US');
    });

    return res.rows;
  } catch (error) {
    throw new Error("Database error pulling newest content: " + error);
  }
}

// Pulls highlights from json file (manually edited)
export async function getHighlights(): Promise<Array<Preview>> {
  try {
    const highlights: Array<Preview> = await readJSONArray<Preview>('json/highlights.json') 

    return highlights;
  } catch (error) {
    throw new Error("Could not read highlights JSON file: " + error)
  }

}
