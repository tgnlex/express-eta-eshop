import { Router } from 'express';
import templates from '../../lib/templates.js';
/*** ROUTER ***/
const router = Router();

/*** PRODUCT DATA ***/
const products = [
  { id: 1, price: 10, name: 'test product 1', description: 'this is a text product',       image: null },
  { id: 2, price: 15, name: 'test product 2', description: 'this is another test product', image: null },
  { id: 3, price: 25, name: 'test product 3', description: 'thid test product',            image: null }
];

/*** ENDPOINTS ***/
router.get('/', (req, res) => {
  res.json({products: products});
});

router.get('/:id', (req, res) => {
  const id = req.params.id - 1;
  const template = templates.product(products[id]);
  res.send(template);
});

export default router;
