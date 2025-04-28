import readJSONArray from '../../utils/readJSONArray.js';
import { Project, SlimProject } from './projects.model.js';

export async function getAllProjectInfo(): Promise<Array<SlimProject>>  {
  try {
    let projectsArray: Array<Project> = await readJSONArray<Project>('json/projects.json')

    return projectsArray.map((project) => {
      const { name, image_path, desc } = project;

      return { name, image_path, desc};
    })
  } catch(error: any) {
    throw new Error(error)
  }
}

export async function getProjectInfo(name: string): Promise<Project | null>  {
  try {
    let projectsArray: Array<Project> = await readJSONArray<Project>('json/projects.json')

    projectsArray.forEach((project) => {
      if (project.name == name)
        return project
    })

    return null
  } catch(error: any) {
    throw new Error(error)
  }
}
