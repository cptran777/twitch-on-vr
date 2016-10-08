// Router for the server using express's abstraction

/******************* INIT DEPENDENCIES *********************/

let path = require('path');

let apiUtil = require('./util/api-util');

/************************* ROUTES **************************/

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  });

  app.get('/twitch/search', (req, res) => {
    apiUtil.TwitchSearch(req, res);
  });
}
