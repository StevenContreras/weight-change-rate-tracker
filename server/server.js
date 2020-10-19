const express = require('express');
const connectLivereload = require('connect-livereload');
const livereload = require('livereload');
const path = require('path');

const app = express();
const PORT = 3000;
const liveReloadServer = livereload.createServer();

liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`Server test is listening on ${PORT}`)
});