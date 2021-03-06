
function formatCityList (list = []) {
  let defaultCity = [
    {
      id: '100000',
      province: '直辖市',
      children: [
        {
          id: '110000',
          city: '北京',
          parentId: '100000'
        },
        {
          id: '310000',
          city: '上海',
          parentId: '100000'
        },
        {
          id: '120000',
          city: '天津',
          parentId: '100000'
        },
        {
          id: '500000',
          city: '重庆',
          parentId: '100000'
        },
      ]
    }
  ]

  let array = []

  list.forEach((item, index) => {
    if (item.id !== '110000' && item.id !== '120000' && item.id !== '500000' && item.id !== '310000') {
      const children = item.children.map((child) => {
        if (child.city.endsWith('市') || child.city.endsWith('自治州') || child.city.endsWith('自治区')) {
          return {
            ...child,
            city: child.city.replace(/自治州||自治区||市/g, '')
          }
        } else if (child.city.length > 4) {
          return {
            ...child,
            city: child.city.substr(0, 4)
          }
        }
        return child
      })
      array.push({...item,
        province: item.province === '黑龙江省' ? item.province.substr(0, 3) : item.province.substr(0, 2),
        children
      })
    }
  })
  return defaultCity.concat(array)
}

const LIST = [
  {
    "id": "110000",
    "province": "北京",
    "children": [
      {
        "id": "110000",
        "city": "北京",
        "parentId": "110000"
      },
      {
        "id": "110101",
        "city": "北京",
        "parentId": "110000"
      }
    ]
  },
  {
    "id": "120000",
    "province": "天津",
    "children": [
      {
        "id": "120000",
        "city": "天津",
        "parentId": "120000"
      },
      {
        "id": "120103",
        "city": "天津",
        "parentId": "120000"
      }
    ]
  },
  {
    "id": "130000",
    "province": "河北省",
    "children": [
      {
        "id": "130100",
        "city": "石家庄",
        "parentId": "130000"
      },
      {
        "id": "130200",
        "city": "唐山",
        "parentId": "130000"
      },
      {
        "id": "130300",
        "city": "秦皇岛",
        "parentId": "130000"
      },
      {
        "id": "130400",
        "city": "邯郸",
        "parentId": "130000"
      },
      {
        "id": "130500",
        "city": "邢台",
        "parentId": "130000"
      },
      {
        "id": "130600",
        "city": "保定",
        "parentId": "130000"
      },
      {
        "id": "130700",
        "city": "张家口",
        "parentId": "130000"
      },
      {
        "id": "130800",
        "city": "承德",
        "parentId": "130000"
      },
      {
        "id": "130900",
        "city": "沧州",
        "parentId": "130000"
      },
      {
        "id": "131000",
        "city": "廊坊",
        "parentId": "130000"
      },
      {
        "id": "131100",
        "city": "衡水",
        "parentId": "130000"
      }
    ]
  },
  {
    "id": "140000",
    "province": "山西省",
    "children": [
      {
        "id": "140100",
        "city": "太原",
        "parentId": "140000"
      },
      {
        "id": "140200",
        "city": "大同",
        "parentId": "140000"
      },
      {
        "id": "140300",
        "city": "阳泉",
        "parentId": "140000"
      },
      {
        "id": "140400",
        "city": "长治",
        "parentId": "140000"
      },
      {
        "id": "140500",
        "city": "晋城",
        "parentId": "140000"
      },
      {
        "id": "140600",
        "city": "朔州",
        "parentId": "140000"
      },
      {
        "id": "140700",
        "city": "晋中",
        "parentId": "140000"
      },
      {
        "id": "140800",
        "city": "运城",
        "parentId": "140000"
      },
      {
        "id": "140900",
        "city": "忻州",
        "parentId": "140000"
      },
      {
        "id": "141000",
        "city": "临汾",
        "parentId": "140000"
      },
      {
        "id": "141100",
        "city": "吕梁",
        "parentId": "140000"
      }
    ]
  },
  {
    "id": "150000",
    "province": "内蒙古",
    "children": [
      {
        "id": "150100",
        "city": "呼和浩特",
        "parentId": "150000"
      },
      {
        "id": "150200",
        "city": "包头",
        "parentId": "150000"
      },
      {
        "id": "150300",
        "city": "乌海",
        "parentId": "150000"
      },
      {
        "id": "150400",
        "city": "赤峰",
        "parentId": "150000"
      },
      {
        "id": "150500",
        "city": "通辽",
        "parentId": "150000"
      },
      {
        "id": "150600",
        "city": "鄂尔多斯",
        "parentId": "150000"
      },
      {
        "id": "150700",
        "city": "呼伦贝尔",
        "parentId": "150000"
      },
      {
        "id": "150800",
        "city": "巴彦淖尔",
        "parentId": "150000"
      },
      {
        "id": "150900",
        "city": "乌兰察布",
        "parentId": "150000"
      },
      {
        "id": "152200",
        "city": "兴安盟",
        "parentId": "150000"
      },
      {
        "id": "152500",
        "city": "锡林郭勒盟",
        "parentId": "150000"
      },
      {
        "id": "152900",
        "city": "阿拉善盟",
        "parentId": "150000"
      }
    ]
  },
  {
    "id": "210000",
    "province": "辽宁省",
    "children": [
      {
        "id": "210100",
        "city": "沈阳",
        "parentId": "210000"
      },
      {
        "id": "210200",
        "city": "大连",
        "parentId": "210000"
      },
      {
        "id": "210300",
        "city": "鞍山",
        "parentId": "210000"
      },
      {
        "id": "210400",
        "city": "抚顺",
        "parentId": "210000"
      },
      {
        "id": "210600",
        "city": "丹东",
        "parentId": "210000"
      },
      {
        "id": "210700",
        "city": "锦州",
        "parentId": "210000"
      },
      {
        "id": "210800",
        "city": "营口",
        "parentId": "210000"
      },
      {
        "id": "210900",
        "city": "阜新",
        "parentId": "210000"
      },
      {
        "id": "211000",
        "city": "辽阳",
        "parentId": "210000"
      },
      {
        "id": "211100",
        "city": "盘锦",
        "parentId": "210000"
      },
      {
        "id": "211200",
        "city": "铁岭",
        "parentId": "210000"
      },
      {
        "id": "211300",
        "city": "朝阳",
        "parentId": "210000"
      },
      {
        "id": "211400",
        "city": "葫芦岛",
        "parentId": "210000"
      }
    ]
  },
  {
    "id": "220000",
    "province": "吉林省",
    "children": [
      {
        "id": "220100",
        "city": "长春",
        "parentId": "220000"
      },
      {
        "id": "220200",
        "city": "吉林",
        "parentId": "220000"
      },
      {
        "id": "220300",
        "city": "四平",
        "parentId": "220000"
      },
      {
        "id": "220400",
        "city": "辽源",
        "parentId": "220000"
      },
      {
        "id": "220500",
        "city": "通化",
        "parentId": "220000"
      },
      {
        "id": "220600",
        "city": "白山",
        "parentId": "220000"
      },
      {
        "id": "220700",
        "city": "松原",
        "parentId": "220000"
      },
      {
        "id": "220800",
        "city": "白城",
        "parentId": "220000"
      },
      {
        "id": "222400",
        "city": "延边朝鲜族",
        "parentId": "220000"
      }
    ]
  },
  {
    "id": "230000",
    "province": "黑龙江省",
    "children": [
      {
        "id": "230100",
        "city": "哈尔滨",
        "parentId": "230000"
      },
      {
        "id": "230200",
        "city": "齐齐哈尔",
        "parentId": "230000"
      },
      {
        "id": "230300",
        "city": "鸡西",
        "parentId": "230000"
      },
      {
        "id": "230400",
        "city": "鹤岗",
        "parentId": "230000"
      },
      {
        "id": "230500",
        "city": "双鸭山",
        "parentId": "230000"
      },
      {
        "id": "230600",
        "city": "大庆",
        "parentId": "230000"
      },
      {
        "id": "230700",
        "city": "伊春",
        "parentId": "230000"
      },
      {
        "id": "230800",
        "city": "佳木斯",
        "parentId": "230000"
      },
      {
        "id": "230900",
        "city": "七台河",
        "parentId": "230000"
      },
      {
        "id": "231000",
        "city": "牡丹江",
        "parentId": "230000"
      },
      {
        "id": "231100",
        "city": "黑河",
        "parentId": "230000"
      },
      {
        "id": "231200",
        "city": "绥化",
        "parentId": "230000"
      },
      {
        "id": "232700",
        "city": "大兴安岭地区",
        "parentId": "230000"
      }
    ]
  },
  {
    "id": "310000",
    "province": "上海",
    "children": [
      {
        "id": "310000",
        "city": "上海",
        "parentId": "310000"
      },
      {
        "id": "310101",
        "city": "上海",
        "parentId": "310000"
      }
    ]
  },
  {
    "id": "320000",
    "province": "江苏省",
    "children": [
      {
        "id": "320100",
        "city": "南京",
        "parentId": "320000"
      },
      {
        "id": "320200",
        "city": "无锡",
        "parentId": "320000"
      },
      {
        "id": "320213",
        "city": "无锡",
        "parentId": "320000"
      },
      {
        "id": "320214",
        "city": "无锡",
        "parentId": "320000"
      },
      {
        "id": "320300",
        "city": "徐州",
        "parentId": "320000"
      },
      {
        "id": "320400",
        "city": "常州",
        "parentId": "320000"
      },
      {
        "id": "320500",
        "city": "苏州",
        "parentId": "320000"
      },
      {
        "id": "320600",
        "city": "南通",
        "parentId": "320000"
      },
      {
        "id": "320700",
        "city": "连云港",
        "parentId": "320000"
      },
      {
        "id": "320800",
        "city": "淮安",
        "parentId": "320000"
      },
      {
        "id": "320900",
        "city": "盐城",
        "parentId": "320000"
      },
      {
        "id": "321000",
        "city": "扬州",
        "parentId": "320000"
      },
      {
        "id": "321100",
        "city": "镇江",
        "parentId": "320000"
      },
      {
        "id": "321200",
        "city": "泰州",
        "parentId": "320000"
      },
      {
        "id": "321300",
        "city": "宿迁",
        "parentId": "320000"
      }
    ]
  },
  {
    "id": "330000",
    "province": "浙江省",
    "children": [
      {
        "id": "330100",
        "city": "杭州",
        "parentId": "330000"
      },
      {
        "id": "330200",
        "city": "宁波",
        "parentId": "330000"
      },
      {
        "id": "330300",
        "city": "温州",
        "parentId": "330000"
      },
      {
        "id": "330400",
        "city": "嘉兴",
        "parentId": "330000"
      },
      {
        "id": "330500",
        "city": "湖州",
        "parentId": "330000"
      },
      {
        "id": "330600",
        "city": "绍兴",
        "parentId": "330000"
      },
      {
        "id": "330700",
        "city": "金华",
        "parentId": "330000"
      },
      {
        "id": "330800",
        "city": "衢州",
        "parentId": "330000"
      },
      {
        "id": "330900",
        "city": "舟山",
        "parentId": "330000"
      },
      {
        "id": "331000",
        "city": "台州",
        "parentId": "330000"
      },
      {
        "id": "331100",
        "city": "丽水",
        "parentId": "330000"
      }
    ]
  },
  {
    "id": "340000",
    "province": "安徽省",
    "children": [
      {
        "id": "340100",
        "city": "合肥",
        "parentId": "340000"
      },
      {
        "id": "340181",
        "city": "合肥",
        "parentId": "340000"
      },
      {
        "id": "340121",
        "city": "合肥",
        "parentId": "340000"
      },
      {
        "id": "340200",
        "city": "芜湖",
        "parentId": "340000"
      },
      {
        "id": "340300",
        "city": "蚌埠",
        "parentId": "340000"
      },
      {
        "id": "340400",
        "city": "淮南",
        "parentId": "340000"
      },
      {
        "id": "340500",
        "city": "马鞍山",
        "parentId": "340000"
      },
      {
        "id": "340600",
        "city": "淮北",
        "parentId": "340000"
      },
      {
        "id": "340700",
        "city": "铜陵",
        "parentId": "340000"
      },
      {
        "id": "340800",
        "city": "安庆",
        "parentId": "340000"
      },
      {
        "id": "341000",
        "city": "黄山",
        "parentId": "340000"
      },
      {
        "id": "341100",
        "city": "滁州",
        "parentId": "340000"
      },
      {
        "id": "341200",
        "city": "阜阳",
        "parentId": "340000"
      },
      {
        "id": "341300",
        "city": "宿州",
        "parentId": "340000"
      },
      {
        "id": "341500",
        "city": "六安",
        "parentId": "340000"
      },
      {
        "id": "341600",
        "city": "亳州",
        "parentId": "340000"
      },
      {
        "id": "341700",
        "city": "池州",
        "parentId": "340000"
      },
      {
        "id": "341800",
        "city": "宣城",
        "parentId": "340000"
      }
    ]
  },
  {
    "id": "350000",
    "province": "福建省",
    "children": [
      {
        "id": "350100",
        "city": "福州",
        "parentId": "350000"
      },
      {
        "id": "350200",
        "city": "厦门",
        "parentId": "350000"
      },
      {
        "id": "350300",
        "city": "莆田",
        "parentId": "350000"
      },
      {
        "id": "350400",
        "city": "三明",
        "parentId": "350000"
      },
      {
        "id": "350500",
        "city": "泉州",
        "parentId": "350000"
      },
      {
        "id": "350527",
        "city": "泉州",
        "parentId": "350000"
      },
      {
        "id": "350600",
        "city": "漳州",
        "parentId": "350000"
      },
      {
        "id": "350700",
        "city": "南平",
        "parentId": "350000"
      },
      {
        "id": "350800",
        "city": "龙岩",
        "parentId": "350000"
      },
      {
        "id": "350900",
        "city": "宁德",
        "parentId": "350000"
      }
    ]
  },
  {
    "id": "360000",
    "province": "江西省",
    "children": [
      {
        "id": "360100",
        "city": "南昌",
        "parentId": "360000"
      },
      {
        "id": "360200",
        "city": "景德镇",
        "parentId": "360000"
      },
      {
        "id": "360300",
        "city": "萍乡",
        "parentId": "360000"
      },
      {
        "id": "360400",
        "city": "九江",
        "parentId": "360000"
      },
      {
        "id": "360500",
        "city": "新余",
        "parentId": "360000"
      },
      {
        "id": "360600",
        "city": "鹰潭",
        "parentId": "360000"
      },
      {
        "id": "360700",
        "city": "赣州",
        "parentId": "360000"
      },
      {
        "id": "360800",
        "city": "吉安",
        "parentId": "360000"
      },
      {
        "id": "360900",
        "city": "宜春",
        "parentId": "360000"
      },
      {
        "id": "361000",
        "city": "抚州",
        "parentId": "360000"
      },
      {
        "id": "361100",
        "city": "上饶",
        "parentId": "360000"
      }
    ]
  },
  {
    "id": "370000",
    "province": "山东省",
    "children": [
      {
        "id": "370100",
        "city": "济南",
        "parentId": "370000"
      },
      {
        "id": "370200",
        "city": "青岛",
        "parentId": "370000"
      },
      {
        "id": "370300",
        "city": "淄博",
        "parentId": "370000"
      },
      {
        "id": "370400",
        "city": "枣庄",
        "parentId": "370000"
      },
      {
        "id": "370500",
        "city": "东营",
        "parentId": "370000"
      },
      {
        "id": "370600",
        "city": "烟台",
        "parentId": "370000"
      },
      {
        "id": "370700",
        "city": "潍坊",
        "parentId": "370000"
      },
      {
        "id": "370800",
        "city": "济宁",
        "parentId": "370000"
      },
      {
        "id": "370900",
        "city": "泰安",
        "parentId": "370000"
      },
      {
        "id": "371000",
        "city": "威海",
        "parentId": "370000"
      },
      {
        "id": "371100",
        "city": "日照",
        "parentId": "370000"
      },
      {
        "id": "371200",
        "city": "莱芜",
        "parentId": "370000"
      },
      {
        "id": "371300",
        "city": "临沂",
        "parentId": "370000"
      },
      {
        "id": "371400",
        "city": "德州",
        "parentId": "370000"
      },
      {
        "id": "371500",
        "city": "聊城",
        "parentId": "370000"
      },
      {
        "id": "371600",
        "city": "滨州",
        "parentId": "370000"
      },
      {
        "id": "371700",
        "city": "菏泽",
        "parentId": "370000"
      }
    ]
  },
  {
    "id": "410000",
    "province": "河南省",
    "children": [
      {
        "id": "410100",
        "city": "郑州",
        "parentId": "410000"
      },
      {
        "id": "410300",
        "city": "洛阳",
        "parentId": "410000"
      },
      {
        "id": "410400",
        "city": "平顶山",
        "parentId": "410000"
      },
      {
        "id": "410500",
        "city": "安阳",
        "parentId": "410000"
      },
      {
        "id": "410600",
        "city": "鹤壁",
        "parentId": "410000"
      },
      {
        "id": "410700",
        "city": "新乡",
        "parentId": "410000"
      },
      {
        "id": "410800",
        "city": "焦作",
        "parentId": "410000"
      },
      {
        "id": "410900",
        "city": "濮阳",
        "parentId": "410000"
      },
      {
        "id": "411000",
        "city": "许昌",
        "parentId": "410000"
      },
      {
        "id": "411100",
        "city": "漯河",
        "parentId": "410000"
      },
      {
        "id": "411200",
        "city": "三门峡",
        "parentId": "410000"
      },
      {
        "id": "411300",
        "city": "南阳",
        "parentId": "410000"
      },
      {
        "id": "411400",
        "city": "商丘",
        "parentId": "410000"
      },
      {
        "id": "411500",
        "city": "信阳",
        "parentId": "410000"
      },
      {
        "id": "411600",
        "city": "周口",
        "parentId": "410000"
      },
      {
        "id": "411700",
        "city": "驻马店",
        "parentId": "410000"
      },
      {
        "id": "419001",
        "city": "省直辖县级行政单位",
        "parentId": "410000"
      }
    ]
  },
  {
    "id": "420000",
    "province": "湖北省",
    "children": [
      {
        "id": "420100",
        "city": "武汉",
        "parentId": "420000"
      },
      {
        "id": "420200",
        "city": "黄石",
        "parentId": "420000"
      },
      {
        "id": "420300",
        "city": "十堰",
        "parentId": "420000"
      },
      {
        "id": "420500",
        "city": "宜昌",
        "parentId": "420000"
      },
      {
        "id": "420600",
        "city": "襄阳",
        "parentId": "420000"
      },
      {
        "id": "420700",
        "city": "鄂州",
        "parentId": "420000"
      },
      {
        "id": "420800",
        "city": "荆门",
        "parentId": "420000"
      },
      {
        "id": "420900",
        "city": "孝感",
        "parentId": "420000"
      },
      {
        "id": "421000",
        "city": "荆州",
        "parentId": "420000"
      },
      {
        "id": "421100",
        "city": "黄冈",
        "parentId": "420000"
      },
      {
        "id": "421200",
        "city": "咸宁",
        "parentId": "420000"
      },
      {
        "id": "421300",
        "city": "随州",
        "parentId": "420000"
      },
      {
        "id": "422800",
        "city": "恩施土家族苗族",
        "parentId": "420000"
      },
      {
        "id": "429004",
        "city": "省直辖县级行政单位",
        "parentId": "420000"
      },
      {
        "id": "429021",
        "city": "省直辖县级行政单位",
        "parentId": "420000"
      }
    ]
  },
  {
    "id": "430000",
    "province": "湖南省",
    "children": [
      {
        "id": "430100",
        "city": "长沙",
        "parentId": "430000"
      },
      {
        "id": "430400",
        "city": "衡阳",
        "parentId": "430000"
      },
      {
        "id": "430500",
        "city": "邵阳",
        "parentId": "430000"
      },
      {
        "id": "430600",
        "city": "岳阳",
        "parentId": "430000"
      },
      {
        "id": "430700",
        "city": "常德",
        "parentId": "430000"
      },
      {
        "id": "430800",
        "city": "张家界",
        "parentId": "430000"
      },
      {
        "id": "430900",
        "city": "益阳",
        "parentId": "430000"
      },
      {
        "id": "431000",
        "city": "郴州",
        "parentId": "430000"
      },
      {
        "id": "431100",
        "city": "永州",
        "parentId": "430000"
      },
      {
        "id": "431200",
        "city": "怀化",
        "parentId": "430000"
      },
      {
        "id": "431300",
        "city": "娄底",
        "parentId": "430000"
      },
      {
        "id": "433100",
        "city": "湘西土家族苗族",
        "parentId": "430000"
      }
    ]
  },
  {
    "id": "440000",
    "province": "广东省",
    "children": [
      {
        "id": "440100",
        "city": "广州",
        "parentId": "440000"
      },
      {
        "id": "440200",
        "city": "韶关",
        "parentId": "440000"
      },
      {
        "id": "440300",
        "city": "深圳",
        "parentId": "440000"
      },
      {
        "id": "440400",
        "city": "珠海",
        "parentId": "440000"
      },
      {
        "id": "440500",
        "city": "汕头",
        "parentId": "440000"
      },
      {
        "id": "440600",
        "city": "佛山",
        "parentId": "440000"
      },
      {
        "id": "440700",
        "city": "江门",
        "parentId": "440000"
      },
      {
        "id": "440800",
        "city": "湛江",
        "parentId": "440000"
      },
      {
        "id": "440900",
        "city": "茂名",
        "parentId": "440000"
      },
      {
        "id": "441200",
        "city": "肇庆",
        "parentId": "440000"
      },
      {
        "id": "441300",
        "city": "惠州",
        "parentId": "440000"
      },
      {
        "id": "441400",
        "city": "梅州",
        "parentId": "440000"
      },
      {
        "id": "441500",
        "city": "汕尾",
        "parentId": "440000"
      },
      {
        "id": "441600",
        "city": "河源",
        "parentId": "440000"
      },
      {
        "id": "441700",
        "city": "阳江",
        "parentId": "440000"
      },
      {
        "id": "441800",
        "city": "清远",
        "parentId": "440000"
      },
      {
        "id": "441900",
        "city": "东莞",
        "parentId": "440000"
      },
      {
        "id": "442000",
        "city": "中山",
        "parentId": "440000"
      },
      {
        "id": "445100",
        "city": "潮州",
        "parentId": "440000"
      },
      {
        "id": "445200",
        "city": "揭阳",
        "parentId": "440000"
      },
      {
        "id": "445300",
        "city": "云浮",
        "parentId": "440000"
      }
    ]
  },
  {
    "id": "450000",
    "province": "广西壮族",
    "children": [
      {
        "id": "450100",
        "city": "南宁",
        "parentId": "450000"
      },
      {
        "id": "450200",
        "city": "柳州",
        "parentId": "450000"
      },
      {
        "id": "450300",
        "city": "桂林",
        "parentId": "450000"
      },
      {
        "id": "450400",
        "city": "梧州",
        "parentId": "450000"
      },
      {
        "id": "450500",
        "city": "北海",
        "parentId": "450000"
      },
      {
        "id": "450600",
        "city": "防城港",
        "parentId": "450000"
      },
      {
        "id": "450700",
        "city": "钦州",
        "parentId": "450000"
      },
      {
        "id": "450800",
        "city": "贵港",
        "parentId": "450000"
      },
      {
        "id": "451000",
        "city": "百色",
        "parentId": "450000"
      },
      {
        "id": "451100",
        "city": "贺州",
        "parentId": "450000"
      },
      {
        "id": "451200",
        "city": "河池",
        "parentId": "450000"
      },
      {
        "id": "451300",
        "city": "来宾",
        "parentId": "450000"
      },
      {
        "id": "451400",
        "city": "崇左",
        "parentId": "450000"
      }
    ]
  },
  {
    "id": "460000",
    "province": "海南省",
    "children": [
      {
        "id": "460100",
        "city": "海口",
        "parentId": "460000"
      }
    ]
  },
  {
    "id": "500000",
    "province": "重庆",
    "children": [
      {
        "id": "500000",
        "city": "重庆",
        "parentId": "500000"
      },
      {
        "id": "500103",
        "city": "重庆",
        "parentId": "500000"
      }
    ]
  },
  {
    "id": "510000",
    "province": "四川省",
    "children": [
      {
        "id": "510100",
        "city": "成都",
        "parentId": "510000"
      },
      {
        "id": "510300",
        "city": "自贡",
        "parentId": "510000"
      },
      {
        "id": "510400",
        "city": "攀枝花",
        "parentId": "510000"
      },
      {
        "id": "510500",
        "city": "泸州",
        "parentId": "510000"
      },
      {
        "id": "510600",
        "city": "德阳",
        "parentId": "510000"
      },
      {
        "id": "510700",
        "city": "绵阳",
        "parentId": "510000"
      },
      {
        "id": "510800",
        "city": "广元",
        "parentId": "510000"
      },
      {
        "id": "510900",
        "city": "遂宁",
        "parentId": "510000"
      },
      {
        "id": "511000",
        "city": "内江",
        "parentId": "510000"
      },
      {
        "id": "511100",
        "city": "乐山",
        "parentId": "510000"
      },
      {
        "id": "511300",
        "city": "南充",
        "parentId": "510000"
      },
      {
        "id": "511400",
        "city": "眉山",
        "parentId": "510000"
      },
      {
        "id": "511500",
        "city": "宜宾",
        "parentId": "510000"
      },
      {
        "id": "511600",
        "city": "广安",
        "parentId": "510000"
      },
      {
        "id": "511700",
        "city": "达州",
        "parentId": "510000"
      },
      {
        "id": "511800",
        "city": "雅安",
        "parentId": "510000"
      },
      {
        "id": "511900",
        "city": "巴中",
        "parentId": "510000"
      },
      {
        "id": "512000",
        "city": "资阳",
        "parentId": "510000"
      },
      {
        "id": "513200",
        "city": "阿坝藏族羌族",
        "parentId": "510000"
      },
      {
        "id": "513300",
        "city": "甘孜藏族",
        "parentId": "510000"
      },
      {
        "id": "513400",
        "city": "凉山彝族",
        "parentId": "510000"
      }
    ]
  },
  {
    "id": "520000",
    "province": "贵州省",
    "children": [
      {
        "id": "520100",
        "city": "贵阳",
        "parentId": "520000"
      },
      {
        "id": "520200",
        "city": "六盘水",
        "parentId": "520000"
      },
      {
        "id": "520300",
        "city": "遵义",
        "parentId": "520000"
      },
      {
        "id": "520304",
        "city": "遵义",
        "parentId": "520000"
      },
      {
        "id": "520381",
        "city": "遵义",
        "parentId": "520000"
      },
      {
        "id": "520400",
        "city": "安顺",
        "parentId": "520000"
      },
      {
        "id": "520500",
        "city": "毕节",
        "parentId": "520000"
      },
      {
        "id": "520600",
        "city": "铜仁",
        "parentId": "520000"
      },
      {
        "id": "522300",
        "city": "黔西南布依族苗族",
        "parentId": "520000"
      },
      {
        "id": "522600",
        "city": "黔东南苗族侗族",
        "parentId": "520000"
      },
      {
        "id": "522700",
        "city": "黔南布依族苗族",
        "parentId": "520000"
      }
    ]
  },
  {
    "id": "530000",
    "province": "云南省",
    "children": [
      {
        "id": "530100",
        "city": "昆明",
        "parentId": "530000"
      },
      {
        "id": "530300",
        "city": "曲靖",
        "parentId": "530000"
      },
      {
        "id": "530400",
        "city": "玉溪",
        "parentId": "530000"
      },
      {
        "id": "530500",
        "city": "保山",
        "parentId": "530000"
      },
      {
        "id": "530600",
        "city": "昭通",
        "parentId": "530000"
      },
      {
        "id": "530700",
        "city": "丽江",
        "parentId": "530000"
      },
      {
        "id": "530800",
        "city": "普洱",
        "parentId": "530000"
      },
      {
        "id": "530900",
        "city": "临沧",
        "parentId": "530000"
      },
      {
        "id": "532300",
        "city": "楚雄彝族",
        "parentId": "530000"
      },
      {
        "id": "532500",
        "city": "红河哈尼族彝族",
        "parentId": "530000"
      },
      {
        "id": "532600",
        "city": "文山壮族苗族",
        "parentId": "530000"
      },
      {
        "id": "532800",
        "city": "西双版纳傣族",
        "parentId": "530000"
      },
      {
        "id": "532900",
        "city": "大理白族",
        "parentId": "530000"
      },
      {
        "id": "533100",
        "city": "德宏傣族景颇族",
        "parentId": "530000"
      },
      {
        "id": "533300",
        "city": "怒江傈僳族",
        "parentId": "530000"
      },
      {
        "id": "533400",
        "city": "迪庆藏族",
        "parentId": "530000"
      }
    ]
  },
  {
    "id": "540000",
    "province": "西藏",
    "children": [
      {
        "id": "540100",
        "city": "拉萨",
        "parentId": "540000"
      },
      {
        "id": "540200",
        "city": "日喀则",
        "parentId": "540000"
      },
      {
        "id": "540300",
        "city": "昌都",
        "parentId": "540000"
      },
      {
        "id": "540400",
        "city": "林芝",
        "parentId": "540000"
      },
      {
        "id": "540500",
        "city": "山南",
        "parentId": "540000"
      },
      {
        "id": "542400",
        "city": "那曲地区",
        "parentId": "540000"
      },
      {
        "id": "542500",
        "city": "阿里地区",
        "parentId": "540000"
      }
    ]
  },
  {
    "id": "610000",
    "province": "陕西省",
    "children": [
      {
        "id": "610100",
        "city": "西安",
        "parentId": "610000"
      },
      {
        "id": "610200",
        "city": "铜川",
        "parentId": "610000"
      },
      {
        "id": "610300",
        "city": "宝鸡",
        "parentId": "610000"
      },
      {
        "id": "610400",
        "city": "咸阳",
        "parentId": "610000"
      },
      {
        "id": "610500",
        "city": "渭南",
        "parentId": "610000"
      },
      {
        "id": "610600",
        "city": "延安",
        "parentId": "610000"
      },
      {
        "id": "610700",
        "city": "汉中",
        "parentId": "610000"
      },
      {
        "id": "610800",
        "city": "榆林",
        "parentId": "610000"
      },
      {
        "id": "610900",
        "city": "安康",
        "parentId": "610000"
      },
      {
        "id": "611000",
        "city": "商洛",
        "parentId": "610000"
      }
    ]
  },
  {
    "id": "620000",
    "province": "甘肃省",
    "children": [
      {
        "id": "620100",
        "city": "兰州",
        "parentId": "620000"
      },
      {
        "id": "620200",
        "city": "嘉峪关",
        "parentId": "620000"
      },
      {
        "id": "620300",
        "city": "金昌",
        "parentId": "620000"
      },
      {
        "id": "620400",
        "city": "白银",
        "parentId": "620000"
      },
      {
        "id": "620500",
        "city": "天水",
        "parentId": "620000"
      },
      {
        "id": "620600",
        "city": "武威",
        "parentId": "620000"
      },
      {
        "id": "620700",
        "city": "张掖",
        "parentId": "620000"
      },
      {
        "id": "620800",
        "city": "平凉",
        "parentId": "620000"
      },
      {
        "id": "620900",
        "city": "酒泉",
        "parentId": "620000"
      },
      {
        "id": "621000",
        "city": "庆阳",
        "parentId": "620000"
      },
      {
        "id": "621100",
        "city": "定西",
        "parentId": "620000"
      },
      {
        "id": "621200",
        "city": "陇南",
        "parentId": "620000"
      },
      {
        "id": "622900",
        "city": "临夏回族",
        "parentId": "620000"
      },
      {
        "id": "623000",
        "city": "甘南藏族",
        "parentId": "620000"
      }
    ]
  },
  {
    "id": "630000",
    "province": "青海省",
    "children": [
      {
        "id": "630100",
        "city": "西宁",
        "parentId": "630000"
      },
      {
        "id": "630200",
        "city": "海东",
        "parentId": "630000"
      },
      {
        "id": "632200",
        "city": "海北藏族",
        "parentId": "630000"
      },
      {
        "id": "632300",
        "city": "黄南藏族",
        "parentId": "630000"
      },
      {
        "id": "632500",
        "city": "海南藏族",
        "parentId": "630000"
      },
      {
        "id": "632600",
        "city": "果洛藏族",
        "parentId": "630000"
      },
      {
        "id": "632700",
        "city": "玉树藏族",
        "parentId": "630000"
      }
    ]
  },
  {
    "id": "640000",
    "province": "宁夏回族",
    "children": [
      {
        "id": "640100",
        "city": "银川",
        "parentId": "640000"
      },
      {
        "id": "640200",
        "city": "石嘴山",
        "parentId": "640000"
      },
      {
        "id": "640300",
        "city": "吴忠",
        "parentId": "640000"
      },
      {
        "id": "640400",
        "city": "固原",
        "parentId": "640000"
      },
      {
        "id": "640500",
        "city": "中卫",
        "parentId": "640000"
      }
    ]
  },
  {
    "id": "650000",
    "province": "新疆维吾尔",
    "children": [
      {
        "id": "650100",
        "city": "乌鲁木齐",
        "parentId": "650000"
      },
      {
        "id": "650200",
        "city": "克拉玛依",
        "parentId": "650000"
      },
      {
        "id": "650202",
        "city": "克拉玛依",
        "parentId": "650000"
      },
      {
        "id": "650204",
        "city": "克拉玛依",
        "parentId": "650000"
      },
      {
        "id": "650400",
        "city": "吐鲁番",
        "parentId": "650000"
      },
      {
        "id": "650500",
        "city": "哈密",
        "parentId": "650000"
      },
      {
        "id": "652900",
        "city": "阿克苏地区",
        "parentId": "650000"
      },
      {
        "id": "653100",
        "city": "喀什地区",
        "parentId": "650000"
      },
      {
        "id": "653200",
        "city": "和田地区",
        "parentId": "650000"
      },
      {
        "id": "652300",
        "city": "昌吉回族",
        "parentId": "650000"
      },
      {
        "id": "652700",
        "city": "博尔塔拉蒙古",
        "parentId": "650000"
      },
      {
        "id": "652800",
        "city": "巴音郭楞蒙古",
        "parentId": "650000"
      },
      {
        "id": "653000",
        "city": "克孜勒苏柯尔克孜",
        "parentId": "650000"
      },
      {
        "id": "653023",
        "city": "克孜勒苏柯尔克孜",
        "parentId": "650000"
      },
      {
        "id": "653024",
        "city": "克孜勒苏柯尔克孜",
        "parentId": "650000"
      },
      {
        "id": "654000",
        "city": "伊犁哈萨克",
        "parentId": "650000"
      },
      {
        "id": "654003",
        "city": "伊犁哈萨克",
        "parentId": "650000"
      },
      {
        "id": "654004",
        "city": "伊犁哈萨克",
        "parentId": "650000"
      },
      {
        "id": "654200",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654202",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654221",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654223",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654224",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654226",
        "city": "塔城地区",
        "parentId": "650000"
      },
      {
        "id": "654300",
        "city": "阿勒泰地区",
        "parentId": "650000"
      },
      {
        "id": "659001",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659002",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659003",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659004",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659005",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659006",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659007",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659008",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      },
      {
        "id": "659009",
        "city": "直辖县级行政单位",
        "parentId": "650000"
      }
    ]
  },
  {
    "id": "810000",
    "province": "香港特别行政区",
    "children": [
      {
        "id": "810000",
        "city": "香港特别行政区",
        "parentId": "810000"
      }
    ]
  },
  {
    "id": "820000",
    "province": "澳门特别行政区",
    "children": [
      {
        "id": "820000",
        "city": "澳门特别行政区（澳）",
        "parentId": "820000"
      }
    ]
  },
  {
    "id": "710000",
    "province": "台湾省",
    "children": []
  }
]

export const CITYLIST = formatCityList(LIST)