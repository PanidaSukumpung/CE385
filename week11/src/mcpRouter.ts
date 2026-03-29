import {Router,Request,Response} from 'express';
import { runQuery } from './tools/queryTool';

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { tool , input } = req.body;
    if(!tool || !input) {
        return res.status(400).json({error: "Missing tool or input"});
    }
    try {
        let result: unknown;
        switch (tool) {
            case "query":
                result = await runQuery(input);
                break;
            default: 
                return res.status(400).json({error: `Unknown tool: ${tool}`});
        }
        res.json({success: true, result});
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message})
    }
})

export default router;