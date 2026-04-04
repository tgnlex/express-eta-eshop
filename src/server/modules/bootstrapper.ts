import express from 'express';
import process from 'process';

function panic(err) {
  console.error('ERROR', err)
  process.exit(1)
}

function Bootstrap() {
  let server = express();
  return { 
    server: server,
    panic: panic,
    version() { return server.get('app.version') },
    port() { return server.get('app.port') },
    host() { return server.get('app.host') }
  }
}


export default Bootstrap
