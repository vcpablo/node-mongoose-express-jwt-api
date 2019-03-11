
import { Router } from 'express';
import auth from './auth';
import person from './person';

const routes = Router();

routes.use('/auth', auth);
routes.use('/person', person);

export default routes;