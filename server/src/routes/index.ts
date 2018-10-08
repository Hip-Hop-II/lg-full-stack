import * as Controllers from '../controllers'

export default (router:any) => {
  console.log(router)
  router.post('/signup', Controllers.User.signup)

  return router
}
