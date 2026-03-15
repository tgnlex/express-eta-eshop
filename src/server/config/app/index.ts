import {plugins, globals} from './express.ts';
import db from './db.ts';


const config = {
  plugins: plugins,
  globals: globals,
  logger: console,
  db: db,
}

export default config;

