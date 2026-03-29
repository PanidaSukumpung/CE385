import {Router,Request,Response} from 'express';
import { askAI } from './lib/llm';
import { success } from 'zod';

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { message } = req.body;

    if(!message || typeof message !== "string") {
        return res.status(400).json({error: "message is required"});
    }
    try {
        const reply = await askAI(message.trim());
        res.json({success: true, reply});
    } catch (error: any) {
        console.error("Chat error", error)
        res.status(500).json({success: false, error: error.message})
    }
})

export default router;