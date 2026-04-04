import express from 'express';
import bootstrap from './modules/bootstrapper.ts';
import router from './routes/index.ts';
import path from 'path';
import helmet from 'helmet';
import api from './routes/api.ts';

const app = bootstrap();

app.server.use(express.static(path.resolve('src/static')));
app.server.use(express.urlencoded({ extended: true }));
app.server.use(express.json());
app.server.use(helmet());

app.server.set('app.port', 3000);
app.server.set('app.host', '127.0.0.1');
app.server.set('app.version', '1.0.0');

app.server.use('/api', api);
app.server.use(router);

export default app;
