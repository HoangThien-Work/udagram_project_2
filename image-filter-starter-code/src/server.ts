import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './controller/V0/image/index.router';

(async () => {
    const app = express();

    // define a port number for running server
    const port: string = process.env.PORT || '8082';
    app.use(bodyParser.json());

    app.use('/', IndexRouter);

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
