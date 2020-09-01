import { Router } from 'express';
import httpStatus from 'http-status';

const router = Router();

router.get('/', (req, res) => {
    res.status(httpStatus.OK).json({
        currentTime: new Date(),
    });
});

export default router;
