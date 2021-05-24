import express = require('express');
import {Controller} from './Controller';

const router = express.Router();
const controller = new Controller();

router.get('/',controller.getController);
router.post('/',controller.postController);
router.put('/',controller.putController);
router.delete('/',controller.deleteController);

export {
    router
}
