import Request from './Request'

export function signin (data: {username: string, password: string}):Promise<Object> {
  return Request('/auth/signin', {
    body: JSON.stringify(data)
  })
}
