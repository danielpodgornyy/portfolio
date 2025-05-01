import readJSONArray from '../../utils/readJSONArray.js';
import { Project, SlimProject } from './projects.model.js';

export async function getAllProjectInfo(): Promise<Array<SlimProject>>  {
  try {
    let projectsArray: Array<Project> = await readJSONArray<Project>('json/projects.json')

    return projectsArray.map((project) => {
      const { name, image_path, image_alt, description } = project;

      return { name, image_path, image_alt, description};
    })
  } catch(error: any) {
    throw new Error(error)
  }
}

export async function getProjectInfo(input_name: string): Promise<Project | null>  {
  try {
    let projectsArray: Array<Project> = await readJSONArray<Project>('json/projects.json')

    // Iterate through projectsArray and set the outputProject if it was seen
    for (const project of projectsArray) {
      if (project.name === input_name) {
        return project;
      }
    }

    return null;
  } catch(error: any) {
    throw new Error(error)
  }
}
