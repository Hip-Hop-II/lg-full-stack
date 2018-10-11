import Position from '../../models/Position'
import * as utils from '../../utils'
import request from 'superagent'

export async function getList (ctx: any): Promise<void> {
  const list = await Position.find({}).populate('companyId').limit(6)
  if (list) {
    ctx.body = {...utils.getStatusAndError({status: 200}), data: list}
  }
}

export async function getData (ctx: any): Promise<void> {
  
}
