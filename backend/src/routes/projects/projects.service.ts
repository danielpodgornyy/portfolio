import db from '../../db/db_conn.js';
import { Project, SlimProject } from './projects.model.js';

export async function getAllProjectInfo(): Promise<Array<SlimProject>>  {
  try {
    const query = `SELECT name, image_path, image_alt, description FROM projects`;

    let res = await db.query(query);

    return res.rows;
  } catch(error: any) {
    throw new Error("Database error getting all project info: " + error)
  }
}

export async function getProjectInfo(input_name: string): Promise<Project | null>  {
  try {

    const query = `SELECT * FROM projects 
                   WHERE name = $1`;

    let res = await db.query(query, [input_name]);

    // Convert date object to a short data EX: MM/DD/YYYY
    res.rows[0].created = res.rows[0].created.toLocaleDateString('en-US');

    return res.rows[0];
  } catch(error: any) {
    throw new Error("Database error getting project info: " + error)
  }
}
