import Application from './modules/bootstrapper.ts';
import information from './modules/info.ts';
import config from './config/app/config.ts';
import page_router from './routes/pages.ts';
import api_router from './routes/api.ts';



const application = new Application(config);

/*** SETUP FNS ***/
application.prestrap('eta', engine());
application.bootstrap();

/*** ROUTERS ***/
application.server.use(page_router)
application.server.use('/api', api_router)

/*** STARTUP MSG ***/
information();


export default application;
