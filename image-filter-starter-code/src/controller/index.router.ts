import { Router, Request, Response } from 'express';
import {ImageRouter} from '../routes/router.controller.image'
const router: Router = Router();

router.use('/image', ImageRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send('try GET /filteredimage?image_url={{}}');
});

export const IndexRouter: Router = router;