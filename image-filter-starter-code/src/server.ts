import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';
import { IndexRouter } from './controller/index.router';

(async () => {
    // Init the Express application
    const app = express();

    // Set the network port
    const port : string = process.env.PORT || '8000';

    // Use the body parser middleware for post requests
    app.use(bodyParser.json());

    app.use('/api/', IndexRouter);

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();