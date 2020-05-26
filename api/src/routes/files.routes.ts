import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import FilesController from '../controllers/FilesController';

const upload = multer(uploadConfig);

const filesRouter = Router();

const filesController = new FilesController();

filesRouter.post('/', upload.single('file'), filesController.create);
filesRouter.get('/', filesController.index);
filesRouter.delete('/', filesController.delete);

export default filesRouter;
