import { Router } from 'express';
import views from '../views/index.ts';
import products from '../data/products.ts';
const router = Router();


router.get('/', (req, res) => {
  res.send(views.home());
});

router.get('/about', (req, res) => {
  res.send(views.about());
});

router.get('/store', (req, res) => {
  res.send(views.store());
});

router.get('/store/:id', (req, res) => {
  const id = req.params.id;
  res.send(`<h1>product ${id} page</h1>`);
});

export default router;
