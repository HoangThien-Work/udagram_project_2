import { Router, Request, Response } from 'express';
import { deleteLocalFiles, filterImageFromURL } from '../../../../util/util';

const router: Router = Router();

//use to filter an image with some setup color.
router.get('/imagefilterd', async (req : Request, res : Response) => {
    const { link_image } = req.query;

    if (!link_image) {
        return res.status(400).send('Please provide a valid image link!');
    }

    var filteredImage: string = await filterImageFromURL(link_image);

    if (!filterImageFromURL) {
        return res.status(500).send('API return a failure response!');
    }

    res.status(200).sendFile(filteredImage);

    return res.on('Process finish.', () => {
        deleteLocalFiles([filteredImage]);
    });
});

export const ImageRouter: Router = router;