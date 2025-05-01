import { Router, Request, Response } from 'express';
import { param } from 'express-validator';

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

// Gets specfic data for a project
router.get('/projects/:name', [param('name').trim().escape()],  async (req: Request, res: Response) => {
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

