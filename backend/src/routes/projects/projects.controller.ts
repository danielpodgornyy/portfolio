import { Router } from 'express';

import { Project, SlimProject } from './projects.model.js';
import { getAllProjectInfo, getProjectInfo } from './projects.service.js'

const router = Router();

// Used to get only the necessary info to show all projects
router.get('/projects', async (req, res) => {
  try {
    let slimProjectsArray: Array<SlimProject> = await getAllProjectInfo();

    res.status(200).json(slimProjectsArray);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

// Used to get only the necessary info to show all projects
router.get('/projects/:name', async (req, res) => {
  try {
    let projectObject: Project | null = await getProjectInfo(req.params.name)
    console.log(projectObject)

    if (!projectObject) {
      res.status(404).json({ error: "Project does not exist"})
      return;
    }

    res.status(200).json(projectObject);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

export default router;

