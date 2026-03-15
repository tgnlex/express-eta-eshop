import {fmt, panic} from './server/utils/helpers.ts';
import app from './server/app.ts';



function main() {
  const address = fmt.address(app.protocol(), app.host(), app.port())
  
  app.server.listen(app.port(), (err) => {
    if (err) panic(err);
    console.info(`[MAIN] server listening on ${address}`)
  });
}


main();

