import express, {urlencoded, json, text, raw} from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import PATH from '../../lib/constants.ts';
import APP from '../env.ts';
const bodyParsers = [urlencoded({extended: true}), json(), text(), raw()];

const plugins = [
  express.static(PATH.STATIC),
  ...bodyParsers,
  cookieParser(),
  helmet()
];

const globals = [
  /*** APP GLOBALS ***/
  { key: 'app.development', value: APP.DEVELOPMENT },
  { key: 'app.production', value: APP.PRODUCTION },

  { key: 'app.protocol',value: APP.PROTOL },
  { key: 'app.version', value: APP.VERSION  },
  { key: 'app.engine', value: APP.ENGINE  },

  { key: 'app.name', value: APP.NAME },
  { key: 'app.host', value: APP.HOST },
  { key: 'app.port', value: APP.PORT },
  { key: 'app.logs', value: APP.LOGS },
  { key: 'app.node', value: APP.NODE },
  /*** PATH GLOBALS  ***/
  { key: 'path.static', val: PATH.STATIC },
  { key: 'path.source', val: PATH.SOURCE },
  { key: 'path.build', val: PATH.BUILD },
  { key: 'path.views', val: PATH.VIEWS },
  { key: 'path.files', val: PATH.FILES },
  { key: 'path.root', val: PATH.ROOT },
  /*** OTHER ***/
  { key: 'view engine', value: APP.ENGINE }
]

export { plugins, globals };
