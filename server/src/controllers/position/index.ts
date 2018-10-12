import Position from "../../models/Position"
import * as utils from "../../utils"
import request from "superagent"
import LgPosition from "../../models/LgPosition"
import * as XLSX from "xlsx"
import * as fs from "fs"
import {formatQueryParams} from '../../utils'

export async function getList(ctx: any): Promise<Object> {
  try {
    console.log(ctx.request.query)
    const {type} = ctx.request.body
    const {limit, skip, sort} = formatQueryParams(ctx.request.query)
    console.log(sort)
    const total = await LgPosition.count()
    const reg = new RegExp(`${type}`, 'i')
    const list = await LgPosition.find({$or: [
      {firstType: reg},
      {secondType: reg},
      {thirdType: reg},
    ]})
      .limit(limit).skip(skip).sort(sort)
    if (list) {
      return ctx.body = { ...utils.getStatusAndError({ status: 200 }), list,
        total,
        currentPage: Math.floor(skip / limit) + 1,
        pageSize: limit
      }
    }
  } catch (error) {
    throw error
  }

  // try {
  //   const WORD = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  //   const list = await LgPosition.find({}).limit(4)
  //   if (list) {
  //     const sheetList = list.slice(0, 26).map((item, index) => {
  //       let obj = {}
  //       console.log(Object.getOwnPropertyNames(item))
  //       console.log(Object.keys(item))
  //       for (let key in item) {
  //         obj[WORD[index]] = item[key]
  //       }
  //       return obj
  //     })
  //     console.log(sheetList)
  //     let ws = XLSX.utils.json_to_sheet(sheetList, {header: WORD})
  //     let wb = XLSX.utils.book_new()
  //     XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
  //     const wbout = new Buffer(
  //       XLSX.write(wb, { bookType: "xlsx", type: "buffer" })
  //     )
  //     fs.writeFile('./position.xls', wbout, err => {
  //       throw err
  //     })
  //   }
  // } catch (error) {
  //   throw error
  // }
}

// export async function getData(ctx: any): Promise<void> {
//   let pn = 0
//   const timer = setInterval(async () => {
//     try {
//       if (pn > 30) {
//         clearInterval(timer)
//       }
//       pn++
//       const res = await request
//         .post(
//           "https://www.lagou.com/jobs/positionAjax.json?px=default&needAddtionalResult=false"
//         )
//         .send({ first: false, pn })
//         .set("Accept", "application/json")
//         .set("Content-Type", "application/x-www-form-urlencoded")
//         .set("Host", "www.lagou.com")
//         .set("Origin", "https://www.lagou.com")
//         .set(
//           "Referer",
//           "https://www.lagou.com/jobs/list_?px=default&city=%E5%85%A8%E5%9B%BD"
//         )
//       console.log(res)
//       if (
//         res &&
//         JSON.parse(res.text) &&
//         JSON.parse(res.text).content &&
//         JSON.parse(res.text).content.positionResult
//       ) {
//         const { result } = JSON.parse(res.text).content.positionResult
//         const pos = await LgPosition.create(...result)
//       }
//     } catch (error) {
//       throw error
//     }
//   }, 10000)
// }

// export async function requestData() {
//   const cityList = [
//     {
//       city: "北京"
//     },
//     {
//       city: "上海"
//     },
//     {
//       city: "深圳"
//     },
//     {
//       city: "广州"
//     },
//     {
//       city: "杭州"
//     },
//     {
//       city: "成都"
//     },
//     {
//       city: "南京"
//     },
//     {
//       city: "武汉"
//     },
//     {
//       city: "西安"
//     },
//     {
//       city: "厦门"
//     },
//     {
//       city: "长沙"
//     },
//     {
//       city: "苏州"
//     },
//     {
//       city: "天津"
//     },
//     {
//       city: "重庆"
//     },
//     {
//       city: "郑州"
//     },
//     {
//       city: "青岛"
//     },
//     {
//       city: "合肥"
//     },
//     {
//       city: "福州"
//     },
//     {
//       city: "济南"
//     },
//     {
//       city: "大连"
//     },
//     {
//       city: "珠海"
//     },
//     {
//       city: "无锡"
//     },
//     {
//       city: "佛山"
//     },
//     {
//       city: "东莞"
//     },
//     {
//       city: "宁波"
//     },
//     {
//       city: "常州"
//     },
//     {
//       city: "沈阳"
//     },
//     {
//       city: "石家庄"
//     },
//     {
//       city: "昆明"
//     },
//     {
//       city: "南昌"
//     },
//     {
//       city: "南宁"
//     }
//   ]
//   const timer = setInterval(async () => {
//     let pn = 0
//     cityList.forEach(async item => {
//       try {
//         if (pn > 30) {
//           clearInterval(timer)
//         }
//         pn++
//         const res = await request
//           .post(
//             "https://www.lagou.com/jobs/positionAjax.json?px=default&needAddtionalResult=false"
//           )
//           .send({ first: false, pn })
//           .set("Accept", "application/json")
//           .set("Content-Type", "application/x-www-form-urlencoded")
//           .set("Host", "www.lagou.com")
//           .set("Origin", "https://www.lagou.com")
//           .set(
//             "Referer",
//             `https://www.lagou.com/jobs/list_?px=default&city=${encodeURIComponent(
//               item.city
//             )}`
//           )
//         if (
//           res &&
//           JSON.parse(res.text) &&
//           JSON.parse(res.text).content &&
//           JSON.parse(res.text).content.positionResult
//         ) {
//           const {result} = JSON.parse(res.text).content.positionResult
//           const pos = await LgPosition.create(...result)
//         }
//       } catch (error) {
//         throw error
//       }
//     })
//   }, 10000)
// }
