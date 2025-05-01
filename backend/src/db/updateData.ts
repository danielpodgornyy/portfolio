

import db from './db_conn.js';
import readJSONArray from '../utils/readJSONArray.js';
import { Post } from '../routes/blog/blog.model.js';
import { Project } from '../routes/projects/projects.model.js';

// Updates the data in the DB to match the json files in the json directory (Only make changes if there's a conflict)
async function updateData() {
  try {

    /* UPDATING BLOG DATA */

    const postObjectArray: Array<Post> = await readJSONArray<Post>('json/blog.json');
    // Flattens each object within the array to make it compatible with the db query
    const flatPostObjectArray = postObjectArray.flatMap(post => [
      post.name,
      post.category,
      post.content,
      post.created
    ]);

    // Placeholder allows for a batch insert by building out the query string
    // EX: (name, cat, con, cre),
    //     (name2, cat2, con2, cre2)
    const post_placeholder = postObjectArray.map((_, i) => {
      const offset = i * 4;
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`;
    }).join(',');

    const post_query = `INSERT INTO blog (name, category, content, created)
                        VALUES ${post_placeholder}
                        ON CONFLICT (name)
                        DO UPDATE SET category = EXCLUDED.category, 
                          content = EXCLUDED.content, 
                          created = EXCLUDED.created`;

    await db.query(post_query, flatPostObjectArray);

    /* UPDATE PROJECT DATA */

    const projectObjectArray: Array<Project> = await readJSONArray<Project>('json/projects.json');
    // Flattens each object within the array to make it compatible with the db query
    const flatProjectObjectArray = projectObjectArray.flatMap(project => [
      project.name,
      project.image_path,
      project.image_alt,
      project.description,
      project.background,
      project.features,
      project.technologies,
      project.live,
      project.source,
      project.created
    ]);

    // Placeholder allows for a batch insert by building out the query string
    // EX: (name, img, alt, desc, bg, feat, tech, live, source, created),
    //     (name2, img2, alt2, desc2, bg2, feat2, tech2, live2, source2, created2)
    const project_placeholder = projectObjectArray.map((_, i) => {
      const offset = i * 10; // Since project has 10 fields
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6}, $${offset + 7}, $${offset + 8}, $${offset + 9}, $${offset + 10})`;
    }).join(',');

    const project_query = `INSERT INTO projects (name, image_path, image_alt, description, background, features, technologies, live, source, created)
                           VALUES ${project_placeholder}
                           ON CONFLICT (name)
                           DO UPDATE SET image_path = EXCLUDED.image_path,
                             image_alt = EXCLUDED.image_alt,
                             description = EXCLUDED.description,
                             background = EXCLUDED.background,
                             features = EXCLUDED.features,
                             technologies = EXCLUDED.technologies,
                             live = EXCLUDED.live,
                             source = EXCLUDED.source,
                             created = EXCLUDED.created`;

    await db.query(project_query, flatProjectObjectArray);

    console.log('Database updated');
  } catch (err) {
    console.error('Could not update data:', err);
  } finally {
    process.exit();
  }
}

updateData();

