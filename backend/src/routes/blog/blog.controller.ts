import { Router } from 'express';

import { Post, SlimPost } from './blog.model.js';
import { getAllPostInfo, getPostInfo } from './blog.service.js'

const router = Router();

// Used to get only the necessary info to show all projects
router.get('/blog', async (req, res) => {
  try {
    let slimPostsInfoArray: Array<SlimPost> = await getAllPostInfo();

    res.status(200).json(slimPostsInfoArray);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

// Used to return an individual blog posts data
router.get('/blog/:name', async (req, res) => {
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

