function request (method) {
  return async function (url, data, options) {
    const response = await window.fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      ...options
    })
    return response.JSON()
  }
}

export const get = request('get')
export const post = request('post')
export const put = request('put')
export const remove = request('delete')
