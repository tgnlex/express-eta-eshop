import { Router } from 'express';


const api = Router();

api.get('/health', (req, res) => {
  res.json({
    status: "online",
    code: 200,
  }).status(200);
});


export default api;
