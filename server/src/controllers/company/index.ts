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
          "https://www.lagou.com/gongsi/4-0-0-0.json"
        )
        .send({ first: false, pn, sortField: 0, havemark: 0 })
        .set("Accept", "application/json")
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Host", "www.lagou.com")
        .set("Origin", "https://www.lagou.com")
        .set('Cookie', 'JSESSIONID=ABAAABAAAGFABEFC1EB72CA92DADD8E3F860B51DFA59EFC; _ga=GA1.2.201348545.1539181031; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1539181031; user_trace_token=20181010221713-2ee350a4-cc97-11e8-af31-525400f775ce; LGUID=20181010221713-2ee353e4-cc97-11e8-af31-525400f775ce; index_location_city=%E5%85%A8%E5%9B%BD; TG-TRACK-CODE=index_navigation; X_HTTP_TOKEN=3620b95a9d9d5538eae2e2d17732ea53; _gid=GA1.2.219676920.153934344; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22166645861234e-0beaf68d48349f-346a749-46000-1666458613e32%22%2C%22%24device_id%22%3A%22166645861234e-0beaf68d48349f-346a749-46000-1666458613e32%22%7D; sajssdk_2015_cross_new_user=1; LG_LOGIN_USER_ID=3a1ee5f555041939038f2fc70f04d229172b71334221cfd9; _putrc=419520CBD841CB84; login=true; unick=%E5%A4%8F%E7%81%BF; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; hasDeliver=302; gate_login_token=c0fcf4ff321446a443fcb016cc444617e62421eb4645; LGSID=2018101220048-7b7ab3da-ce17-11e8-bbbf-5254005c3644; PRE_UTM=; PRE_HOST=; PRE_SITE=; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2Fgongsi%2F6-0-0-0; _gat=1; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1539347515; LGRID=20181012203202-d20f846-ce1a-11e8-b10b-525400f775ce')
        .set(
          "Referer",
          'https://www.lagou.com/gongsi/4-0-0-0'
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

