import { Router } from 'express';
import { param } from 'express-validator';
import { getAllProjectInfo, getProjectInfo } from './projects.service.js';
const router = Router();
// Used to get only the necessary info to show all projects
router.get('/projects', async (req, res) => {
    try {
        let slimProjectsArray = await getAllProjectInfo();
        res.status(200).json(slimProjectsArray);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
// Gets specfic data for a project
router.get('/projects/:name', [param('name').trim().escape()], async (req, res) => {
    try {
        let projectObject = await getProjectInfo(req.params.name);
        console.log(projectObject);
        if (!projectObject) {
            res.status(404).json({ error: "Project does not exist" });
            return;
        }
        res.status(200).json(projectObject);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
export default router;
