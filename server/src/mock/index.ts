import faker from 'faker'
import Position from '../models/Position'
import Company from '../models/Company'

const POSITION_NUM = 3
const COMPANY_NUM = 3

export default async (): Promise <void> => {
  await Position.remove()
  await Company.remove()
  faker.locale = 'zh_CN'
  Array.from({length: COMPANY_NUM}).forEach(async(item) => {
    const company = await Company.create({
      name: faker.company.companyName(),
      avatar: faker.image.avatar(),
      recruitment_position: faker.random.number(100, 200),
      appraisal: faker.random.number(1, 5),
      city: faker.address.city(),
      financing: '未融资',
      peoples: faker.random.number(100, 300)
    })
    Array.from({length: POSITION_NUM}).forEach(async (item) => {
      await Position.create({
        companyId: company,
        title: faker.name.title(),
        city: faker.address.city(),
        address: faker.address.secondaryAddress(),
        experience: `${faker.random.number(1, 3)} - ${faker.random.number(3, 5)}`,
        education: '本科',
        salary: '15-30k'
      })
    })
  })
}
