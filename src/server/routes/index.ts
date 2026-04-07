import { Router } from 'express';
import type { Request, Response } from 'express';
import views from '../views/index.ts';
import products from '../data/products.ts';
import admin from './pages/admin.ts';
const router: Router = Router();

router.use('/admin', admin);

router.get('/', (req: Request, res: Response): void => {
  res.send(views.home());
});

router.get('/about', (req: Request, res: Response): void => {
  res.send(views.about());
});

router.get('/store', (req: Request, res: Response): void => {
  res.send(views.store());
});

router.get('/store/:id', (req: Request, res: Response): void => {
  const id = req.params.id;
  res.send(views.product(id));
});

router.get('/login', (req: Request, res: Response): void => {
  res.send('ADMIN LOGIN')
});

export default router;
