import { BASE_URL, APP_KEY } from './config'
import { get, post, put, remove } from './crud'
import { delComments } from './commentRequests'

function create (type, data) {
  return post(`${BASE_URL}appdata/${APP_KEY}/${type}`, 'kinvey', data)
}

function getCatalog (type, sortMethod, page) {
  const sort = (sortMethod === 'ASC') ? '1' : '-1'
  const skip = (page - 1) * 3
  return get(`https://baas.kinvey.com/appdata/${APP_KEY}/${type}?sort={"price":${sort}}&limit=3&skip=${skip}`, 'kinvey')
}

async function getDetails (productId, type) {
  return get(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, 'kinvey')
}

async function deleteProduct (productId, type) {
  await delComments(productId)
  return remove(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, 'kinvey')
}

async function updateProduct (productId, type, data) {
  return put(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, 'kinvey', data)
}

async function getCount (type) {
  return get(`https://baas.kinvey.com/appdata/${APP_KEY}/${type}/_count`, 'kinvey')
}

export { create, getCatalog, getDetails, deleteProduct, updateProduct, getCount }
