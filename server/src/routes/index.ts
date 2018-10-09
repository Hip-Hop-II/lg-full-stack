import * as Controllers from '../controllers'
import {checkAuth} from '../services/auth'

export default (router:any) => {
  console.log(router)
  router.post('/signup', Controllers.User.signup)
  router.post('/signin', Controllers.User.signin)

  router.get('/company/list', checkAuth, Controllers.Company.getList)

  return router
}
