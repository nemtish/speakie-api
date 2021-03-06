
import express from 'express';
import audio from './audio.js';


const apiRouter = (dependencies) => {
    const routes = express.Router();

    const audioRouter = audio(dependencies);

    routes.use('/audio', audioRouter);
    return routes;

};

export default apiRouter;