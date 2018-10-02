const data = require('./data.json')
const city = require('./city.json')
const fs = require('fs')

let array = []
// let obj = {}

let obj = {}
const arr = data.forEach((item, index) => {
  city.forEach((c, k) => {
    if (obj['quhao'] === item.quhao) {

    } else {
      if (item.ShengJiName === c.province && item.diji) {
        obj['quhao'] = item.quhao
        c.children.push({
          id: item.quHuaDaiMa,
          city: item.diji,
          parentId: c.id
        })
      }
    }
  })
  // if (obj.ShengJiName === item.ShengJiName) {

  // } else {
  //   obj['ShengJiName'] = item['ShengJiName']
  //   array.push({
  //     id: item.quHuaDaiMa,
  //     province: item.ShengJiName,
  //     children: []
  //   })
  // }
})

console.log(city)

console.log(array.length)
fs.writeFileSync('./cityList.js', JSON.stringify(city, null, 2), 'utf8')

// fs.writeFileSync('./city.json', JSON.stringify(array, null, 2), 'utf8')


