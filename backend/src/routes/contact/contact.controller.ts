import { Router, Request, Response} from 'express';
import { body } from 'express-validator';
import { writeFile } from 'fs/promises';
import rateLimit from 'express-rate-limit';

import emailValidator from '../../utils/emailValidator.js';
import appendJSON from '../../utils/appendJSON.js';
import sendEmail from './contact.service.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 3 * 60 * 60 * 1000, // Only allows every 3 hours
  max: 5, // max 5 requests for each window for each IP
  message: 'Too many messages from this IP. Please try again later.',
});

router.post('/contact', contactLimiter, [
  body('name').trim().escape(),
  body('email').trim().isEmail().withMessage("Invalid email format").normalizeEmail(),
  body('message').trim().escape()
], async (req: Request, res: Response) => {
  try {
    // Append the message to the json message file
    await appendJSON(req.body, 'messages.json'); 

    // Send email of message to myself
    let emailResponse = await sendEmail(req.body);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
});

export default router;

