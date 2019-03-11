import { Router } from 'express';
import PersonController from '../controllers/PersonController';
import { checkJwt } from '../middleware/checkJwt';

const router = Router();
//Get all contacts
router.get('/', [checkJwt], PersonController.listAll);
router.post('/', [checkJwt], PersonController.create);
router.get('/:id', [checkJwt], PersonController.findById);
router.put('/:id', [checkJwt], PersonController.update);
router.delete('/:id', [checkJwt], PersonController.delete);

export default router;