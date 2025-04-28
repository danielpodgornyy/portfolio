import { Router } from 'express';
import { writeFile } from 'fs/promises';

import emailValidator from '../../utils/emailValidator.js';
import appendJSON from '../../utils/appendJSON.js';
import sendEmail from './contact.service.js';

const router = Router();

router.post('/contact', async (req, res, next) => {
  try {
    // Append the message to the json message file
    await appendJSON(req.body, 'messages.json'); 

    // Check email format
    if (!emailValidator(req.body.email)) {
      res.status(400).json({ error: 'Invalid email format'});
    }

    // Send email of message to myself
    let emailResponse = await sendEmail(req.body);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

export default router;

