import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/shop', (req, res) => {
  res.render('pages/store')
});

router.get('/shop/:id', (req, res) => {
  const id = req.params.id;
  res.render(`pages/products/${id}`);
});

export default router;
