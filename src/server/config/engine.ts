import { Eta } from "eta";
import PATH from '../lib/constants.ts';

const eta = new Eta({ views: PATH.VIEWS })l

function engine() { 
  return (path, opts. cb) => {
    try {
      const file = eta.readfile(path);
      const template = eta.renderString(file, opts);
      cb(null, template);
    } catch(error) { cb(error) }
  }
}

export { engine };


