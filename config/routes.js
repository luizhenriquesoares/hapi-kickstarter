const passport = require('passport')

/* controllers -------------------------------------------------------------- */
const authController = require('../api/controllers/auth.controller')

/* -------------------------------------------------------------------------- *\
 *  Exposes routes
\* -------------------------------------------------------------------------- */

module.exports = function (server, passport) {

  const HapiRouter = require('../api/utils/traefikHapi')(server)
  const Router = new HapiRouter();

  /* auth middlewares ------------------------------------------------------- */
  const jwtAuth = passport.authenticate('jwt', { session: false })
  const requireSignin = passport.authenticate('local', { session: false })

  Router.group('/api/v1',  Router => {
    // Initialize constructor Router
    const app = new Router()
   /* Auth ----------------------------------------------------------------- */
    app.get('/user/validate/token/{token}/{a}', authController.getInfo)

 })
}