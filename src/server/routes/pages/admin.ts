import { Router } from 'express';
import type { Request, Response } from 'express'

const router: Router = Router();


router.get('/', (req: Request, res: Response): void => {
  res.send('<h1>Admin Dashboard</h1>')
})

router.get('/create', (req: Request, res: Response): void => {
  res.send('<h1>Create Product</h1>');
});

router.get('/edit/:id', (req: Request, res: Response): void => {
  res.send('<h1>Edit Post</h1>')
});

export default router;
