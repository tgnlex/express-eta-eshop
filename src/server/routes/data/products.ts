import { Router } from 'express';
import products from '../../data/products.ts';

const router = Router();


router.get('/', (req, res) => {
  res.json(products);
});


router.get('/:id', (req, res) => {
  let id = req.params.id - 1;
  res.json(product);
});

export default router;
