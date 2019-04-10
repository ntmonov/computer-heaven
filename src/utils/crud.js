import { APP_KEY, APP_SECRET } from './config'

function createCredentials (type) {
  const basicCredentials = 'Basic ' + window.btoa(APP_KEY + ':' + APP_SECRET)
  const kinveyCredentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  return (type === 'basic')
    ? basicCredentials : kinveyCredentials
}

function request (method) {
  return async function (url, credentials, data = {}, options = {}) {
    const response = await window.fetch(url, {
      method,
      headers: {
        'Authorization': createCredentials(credentials),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      ...options
    })
    return response.json()
  }
}

export const get = request('get')
export const post = request('post')
export const put = request('put')
export const remove = request('delete')
