// fetch an api endpoint
async function getJSON(endpoint, _method, _body) {
  // set defaults if optional parameters are not passed
  const method = _method || 'GET'
  const body = _body || {}

  try {
    const response = await fetch(`/api/${endpoint}`, {
      method,
      body,
    })
    if (response.ok) {
      return response.json()
    }
    throw new Error(`Invalid response from endpoint ${endpoint}`)
  } catch (err) {
    throw new Error('Failed to contact API: ', err)
  }
}

export default async function getPopularEvents() {
  return getJSON('test')
}
