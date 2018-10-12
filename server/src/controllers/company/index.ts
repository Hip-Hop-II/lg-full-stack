import Company from '../../models/Company'
import request from 'superagent'
import LgCompany from '../../models/LgCompany'

export async function getList(ctx: any) {
  const lists = await Company.find({}).skip().limit(6)
  if (lists) {
    ctx.body = {
      status: 200,
      data: lists
    }
  }
}

export async function requestData() {
  var pn = 1
  const timer = setInterval(async () => {
    try {
      if (pn > 20) {
        clearInterval(timer)
      }
      pn++
      const res = await request
        .post(
          "https://www.lagou.com/gongsi/215-0-0-0.json"
        )
        .send({ first: false, pn, sortField: 0, havemark: 0 })
        .set("Accept", "application/json")
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Host", "www.lagou.com")
        .set("Origin", "https://www.lagou.com")
        .set('Cookie', 'JSESSIONID=ABAAABAAAFCAAEGDC9AA7B01B25606EB720D0D6AAC7A3C7; _ga=GA1.2.1261068430.1539141596; _gid=GA1.2.1376984470.1539141596; user_trace_token=20181010111956-5cb12df5-cc3b-11e8-ae52-525400f775ce; LGUID=20181010111956-5cb130ad-cc3b-11e8-ae52-525400f775ce; index_location_city=%E5%85%A8%E5%9B%BD; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1539141596,1539220167,1539220179; SEARCH_ID=04ca094836a24f2ba09a577e6bd5cf89; TG-TRACK-CODE=jobs_similar; LGSID=20181012154609-e1e5b93d-cdf2-11e8-b0df-525400f775ce; X_HTTP_TOKEN=10ba65b0af4a652e8788e2f44793f0ab; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22166674f8ee02b6-03dd4ae3f777e1-346a7809-2359296-166674f8ee1a37%22%2C%22%24device_id%22%3A%22166674f8ee02b6-03dd4ae3f777e1-346a7809-2359296-166674f8ee1a37%22%7D; sajssdk_2015_cross_new_user=1; LG_LOGIN_USER_ID=aa6bf93f25aae71dd8e783089c7b993f036349a83aac048b; _putrc=419520CBD841CB84; login=true; unick=%E5%A4%8F%E7%81%BF; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; hasDeliver=302; gate_login_token=47dbc6ba800eb178febbd878d57769698abc7641ac129811; _gat=1; LGRID=20181012162457-4e0583df-cdf8-11e8-bbbf-5254005c3644; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1539332698')
        .set(
          "Referer",
          'https://www.lagou.com/gongsi/215-0-0-0'
        )
        console.log(res.text)
      if (
        res &&
        res.text &&
        JSON.parse(res.text).result
      ) {
        const {result} = JSON.parse(res.text)
        const pos = await LgCompany.create(...result)
      }
    } catch (error) {
      throw error
    }
  }, 10000)
}

