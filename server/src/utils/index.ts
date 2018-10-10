
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
