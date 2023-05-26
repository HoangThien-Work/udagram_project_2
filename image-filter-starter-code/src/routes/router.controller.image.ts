import { Router, Request, Response } from 'express';
import { deleteLocalFiles, filterImageFromURL } from '../util/util';

const router : Router = Router();

//sort for a image
router.get('/filterimage', async(req:Request,res:Response)=>{
    const {image_link} = req.query;

    if(!image_link){
        return res.status(400).send('A image url need to provide or invalid image url');
    }
    
    var imageFilterd = await filterImageFromURL(image_link);
    if(!filterImageFromURL){
        return res.status(500).send('Api return with failure response!');
    }

    res.status(200).sendFile(imageFilterd);

    return res.on('finish', () => {
        deleteLocalFiles([imageFilterd])
    });
});

export const ImageRouter : Router = router;

