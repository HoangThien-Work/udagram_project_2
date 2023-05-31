import { Router, Request, Response } from 'express';
import { ImageRouter } from './routes/image.router';

const router: Router = Router();

router.use('/', ImageRouter);

//root endpoint without any controller path include
router.get('/', async (req: Request, res: Response) => {
    res.send('try GET /imagefilterd?link_image={{provide a iamge link here}}');
});

export const IndexRouter: Router = router;
