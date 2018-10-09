import * as Controllers from '../controllers'

export default (router:any) => {
  console.log(router)
  router.post('/signup', Controllers.User.signup)
  router.post('/signin', Controllers.User.signin)

  return router
}
