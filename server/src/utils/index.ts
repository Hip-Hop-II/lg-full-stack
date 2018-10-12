
interface options {
  status: Number
}


export function getStatusAndError (options: Object): Object {
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

interface params {
  currentPage: Number,
  pageSize: Number,
  sort: Object
}
export function formatQueryParams (params: Object): Object {
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
