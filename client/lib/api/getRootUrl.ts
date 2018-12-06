
export default function getRootUrl ():string {
  const port = process.env.PORT || 4000
  const dev = process.env.NODE_ENV !== 'production'
  const ROOT_URL = dev ? `http://localhost:${port}` : ''
  return ROOT_URL
}
