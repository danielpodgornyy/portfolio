import db from '../../db/db_conn.js';
import { Post, SlimPost } from './blog.model.js';

export async function getAllPostInfo(): Promise<Array<SlimPost>>  {
  try {
    const query = `SELECT name, category, created FROM blog
                   ORDER BY created DESC`;

    let res = await db.query(query);

    // Convert date object to a short data for each SlimPostInfo object EX: MM/DD/YYYY
    res.rows.forEach((row) => {
      row.created = row.created.toLocaleDateString('en-US');
    })

    return res.rows;
  } catch(error: any) {
    throw new Error("Database error getting all post info: " + error)
  }
}

export async function getPostInfo(input_name: string): Promise<Post | null>  {
  try {
    const query = `SELECT * FROM blog
                   WHERE name = $1`;

    let res = await db.query(query, [input_name]);

    // Convert date object to a short data EX: MM/DD/YYYY
    res.rows[0].created = res.rows[0].created.toLocaleDateString('en-US');

    return res.rows[0];
  } catch(error: any) {
    throw new Error("Database error getting post info: " + error)
  }
}
