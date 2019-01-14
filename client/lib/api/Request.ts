import getRootUrl from './getRootUrl'
import queryString from 'query-string'

export default async function sendRequest (path: string, opts: any = {}) {
  const { externalServer } = opts
  const ohterHeaderOps = externalServer ? {} : {'Content-type': 'application/json; charset=UTF-8'}
  const headers = {
    ...opts.headers,
    ...ohterHeaderOps
  }
  const { request } = opts
  if (request && request.headers && request.headers.cookie) {
    headers.cookie = request.headers.cookie
  }

  const qs = (opts.qs && queryString.stringify(opts.qs)) || ''

  const response = await fetch(
    externalServer ? `${path}` : `${getRootUrl()}${path}${qs}`,
    {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      ...opts,
      headers
    }
  )
  const text = await response.text()
  if (response.status >= 400) {
    console.error(text)
    throw new Error(response.statusText)
  }

  try {
    const data = JSON.parse(text)
    if (data.error) {
      throw new Error(data.error)
    }
    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      return text
    }
    throw error
  }
}
