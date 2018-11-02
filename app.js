/* dependencies-------------------------------------------------------------- */
const fs = require('fs');
const Hapi = require('hapi');
const chalk = require('chalk');
const dotenv = require('dotenv');
const passport = require('passport');
const join = require('path').join;

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port = process.env.PORT || 3000;

/* Models init -------------------------------------------------------------- */
const models = join(__dirname + '/api', 'models');

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

/* app config --------------------------------------------------------------- */
const server = Hapi.server({ port, host: 'localhost'})

// require('./config/passport')(passport);
// require('./config/express')(app, passport);
require('./config/routes')(server, passport);

/* bootstrap ---------------------------------------------------------------- */
module.exports = server;

// connect()
//   .on('error', console.log)
//   .on('disconnected', connect)
//   .once('open', listen);

// function connect () {
//     let options = { server: { socketOptions: { keepAlive: 1 } } };
//     mongoose.Promise = global.Promise;
//     return mongoose.connect(
//         process.env.MONGODB_URI || process.env.MONGOLAB_URI,
//         options).connection;
// }

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`,chalk.green('✓'),);
};

init();