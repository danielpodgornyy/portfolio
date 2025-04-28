import { Router } from 'express';
import contactController from './contact/contact.controller.js'
import projectsController from './projects/projects.controller.js'

const router = Router()
  .use(contactController)
  .use(projectsController);

export default router;
