import { Router } from 'express';
import contactController from './contact/contact.controller.js';
import projectsController from './projects/projects.controller.js';
import blogController from './blog/blog.controller.js';
const router = Router()
    .use(contactController)
    .use(projectsController)
    .use(blogController);
export default router;
