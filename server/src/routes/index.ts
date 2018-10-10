import * as Controllers from '../controllers'
import {checkAuth} from '../services/auth'

export default (router:any) => {
  console.log(router)
  router.post('/auth/signup', Controllers.User.signup)
  router.post('/auth/signin', Controllers.User.signin)
  router.get('/auth/userinfo', checkAuth, Controllers.User.getUserInfo)

  router.get('/company/list', checkAuth, Controllers.Company.getList)

  router.get('/position/list', checkAuth, Controllers.Position.getList)

  return router
}
