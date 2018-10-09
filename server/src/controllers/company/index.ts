import Company from '../../models/Company'

export async function getList(ctx: any) {
  const lists = await Company.find({}).skip().limit(6)
  if (lists) {
    ctx.body = {
      status: 200,
      data: lists
    }
  }
}
