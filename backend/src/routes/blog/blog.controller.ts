import { Router, Request, Response } from 'express';
import { param } from 'express-validator';

import { Post, SlimPost } from './blog.model.js';
import { getAllPostInfo, getPostInfo } from './blog.service.js'

const router = Router();

// Used to get only the necessary info to show all projects
router.get('/blog', async (req, res) => {
  try {
    let slimPostsInfoArray: Array<SlimPost> = await getAllPostInfo();

    console.log(slimPostsInfoArray)
    res.status(200).json(slimPostsInfoArray);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

// Make sure to sanitize input
router.get('/blog/:name', [param('name').trim().escape()], async (req: Request, res: Response) => {
  try {
    let postInfo: Post | null = await getPostInfo(req.params.name)
    console.log(postInfo)

    if (!postInfo) {
      res.status(404).json({ error: "Blog post does not exist"})
      return;
    }

    res.status(200).json(postInfo);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

export default router;

