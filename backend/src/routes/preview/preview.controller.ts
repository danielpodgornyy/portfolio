import { Router } from 'express';

import { getNewestContent, getHighlights } from './preview.service.js'

import { Preview } from './preview.model.js';

const router = Router();

// Used to pull both the newest content and highlights from the projects and blog data ([0] for newest [1] for highlights)
router.get('/preview', async (req, res) => {
  try {
    let newestContent : Array<Preview> = await getNewestContent();
    let highlights : Array<Preview> = await getHighlights();

    res.status(200).json([newestContent, highlights]);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

export default router;
