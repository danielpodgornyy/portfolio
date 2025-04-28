import readJSONArray from '../../utils/readJSONArray.js';
export async function getAllProjectInfo() {
    try {
        let projectsArray = await readJSONArray('json/projects.json');
        return projectsArray.map((project) => {
            const { name, image_path, desc } = project;
            return { name, image_path, desc };
        });
    }
    catch (error) {
        throw new Error(error);
    }
}
export async function getProjectInfo(input_name) {
    try {
        let projectsArray = await readJSONArray('json/projects.json');
        // Iterate through projectsArray and set the outputProject if it was seen
        for (const project of projectsArray) {
            if (project.name === input_name) {
                return project;
            }
        }
        return null;
    }
    catch (error) {
        throw new Error(error);
    }
}
