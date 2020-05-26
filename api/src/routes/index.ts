import { Router } from 'express';
import fileRouter from './files.routes';

const routes = Router();

routes.use('/files', fileRouter);

export default routes;
