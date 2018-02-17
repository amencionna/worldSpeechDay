const Home = require('./app/controllers/home');
const Assets = require('./app/controllers/assets')
module.exports = [

  { method: 'GET', path: '/', config: Home.home },
  {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
 },

];

