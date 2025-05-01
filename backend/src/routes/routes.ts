import { Router } from 'express';
import contactController from './contact/contact.controller.js'
import projectsController from './projects/projects.controller.js'
import blogController from './blog/blog.controller.js'
import previewController from './preview/preview.controller.js'

const router = Router()
  .use(contactController)
  .use(projectsController)
  .use(blogController)
  .use(previewController);

export default router;
