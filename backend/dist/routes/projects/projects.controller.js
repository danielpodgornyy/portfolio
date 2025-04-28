import { Router } from 'express';
import { getAllProjectInfo, getProjectInfo } from './projects.service.js';
const router = Router();
// Used to get only the necessary info to show all projects
router.get('/projects', async (req, res, next) => {
    try {
        let slimProjectsArray = await getAllProjectInfo();
        res.status(200).json(slimProjectsArray);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
// Used to get only the necessary info to show all projects
router.get('/projects/:name', async (req, res, next) => {
    try {
        let projectObject = await getProjectInfo(req.params.name);
        if (!projectObject) {
            res.status(404).json({ error: "Project does not exist" });
        }
        res.status(200).json(projectObject);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
export default router;
