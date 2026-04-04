import app from './server/app.ts';

const PORT = app.server.get('app.port');

function main() {
  app.server.listen(PORT, (err) => {
    if (err) app.panic(err)
    console.info(`[MAIN] Server listening on http://localhost:${PORT}`)
  })
}

main();
