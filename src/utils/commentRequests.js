import { BASE_URL, APP_KEY } from './config'
import { get, post, remove } from './crud'

async function leaveComment (comment) {
  return post(`${BASE_URL}appdata/${APP_KEY}/comments`, 'kinvey', comment)
}

async function getComments (productId) {
  return get(`${BASE_URL}appdata/${APP_KEY}/comments/?query={"productId":"${productId}"}`, 'kinvey')
}

async function delComments (productId) {
  return remove(`${BASE_URL}appdata/${APP_KEY}/comments/?query={"productId":"${productId}"}`, 'kinvey')
}

export { leaveComment, getComments, delComments }
