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
export async function getProjectInfo(name) {
    try {
        let projectsArray = await readJSONArray('json/projects.json');
        projectsArray.forEach((project) => {
            if (project.name == name)
                return project;
        });
        return null;
    }
    catch (error) {
        throw new Error(error);
    }
}
