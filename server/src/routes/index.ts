import * as Controllers from '../controllers'
import {checkAuth} from '../services/auth'

export default (router:any) => {
  router.post('/auth/signup', Controllers.User.signup)
  router.post('/auth/signin', Controllers.User.signin)
  router.get('/auth/userinfo', checkAuth, Controllers.User.getUserInfo)

  router.get('/company/list', checkAuth, Controllers.Company.getList)

  router.get('/position/list', Controllers.Position.getList)
  // router.get('/position/data', Controllers.Position.getData)
  // router.get('/position/requestData', Controllers.Position.requestData)

  return router
}
