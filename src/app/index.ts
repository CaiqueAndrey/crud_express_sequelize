import { Router } from 'express';

const router = Router();

router.use('/user', require('./user/routes'));

module.exports = router;