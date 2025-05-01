import { Router } from 'express';
import { body } from 'express-validator';
import appendJSON from '../../utils/appendJSON.js';
import sendEmail from './contact.service.js';
const router = Router();
router.post('/contact', [
    body('name').trim().escape(),
    body('email').trim().isEmail().withMessage("Invalid email format").normalizeEmail(),
    body('message').trim().escape()
], async (req, res) => {
    try {
        // Append the message to the json message file
        await appendJSON(req.body, 'messages.json');
        // Send email of message to myself
        let emailResponse = await sendEmail(req.body);
        res.status(200).json({ message: 'Message sent successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
export default router;
