import express from 'express';
import audioController from '../../controller/audio.controller.js';

const audioRouter = (dependencies) => {

    const router = express.Router();
    const controller = audioController(dependencies);

    router.route('/')
        .get(controller.get)
        .post(controller.insert);
    // router.post('/save', controller.insert);
    // router.get('/load', controller.load);
    // router.get('/show/all', controller.list);

    return router;
}


export default audioRouter;