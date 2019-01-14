
interface options {
  status: Number
}


export function getStatusAndError (options: any): any {
  const {status} = options
  switch (status) {
    case 200:
    return {
      status,
      message: 'success'
    }
    case 403:
    return {
      status,
      message: 'token验证失败'
    }
    default:
    return {}
  }
}

export function formatQueryParams (params: any): any {
  let {currentPage, pageSize, sort} = params
  let limit = parseInt(pageSize) || 10
  currentPage = currentPage || 1
  let skip = limit * (Math.floor(parseInt(currentPage) - 1))
  return {
    limit,
    skip,
    sort: sort ? {[sort]: -1} : {}
  }
}
