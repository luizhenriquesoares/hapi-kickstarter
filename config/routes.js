const passport = require('passport')

// Import route grouper
//require('../api/utils/express-group-router')

/* controllers -------------------------------------------------------------- */
const authController = require('../api/controllers/auth.controller')

/* -------------------------------------------------------------------------- *\
 *  Exposes routes
\* -------------------------------------------------------------------------- */

module.exports = function (server, passport) {

  const HapiRouter = require('../api/utils/traefikHapi')(server)
  const Route = new HapiRouter();

  Route.get('/', authController.getInfo)
  Route.get('/teste', authController.teste)

  /* auth middlewares ------------------------------------------------------- */
  const jwtAuth = passport.authenticate('jwt', { session: false })
  const requireSignin = passport.authenticate('local', { session: false })

//   Router.group('/api/v1', Router => {

//     /* User ----------------------------------------------------------------- */
//     Router.get('/user/', jwtAuth,             userController.getCurrentSecret)

//   });

//   app.use(Router)
}