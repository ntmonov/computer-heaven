import { BASE_URL, APP_KEY } from './config'
import { get, post, put, remove } from './crud'
import { delComments } from './commentRequests'

function create (type, data) {
  return post(`${BASE_URL}appdata/${APP_KEY}/${type}`, 'kinvey', data)
}

async function getCatalog (type, sortMethod, page) {
  const sort = (sortMethod === 'ASC') ? '1' : '-1'
  const skip = (page - 1) * 3
  return get(`${BASE_URL}appdata/${APP_KEY}/${type}?sort={"price": ${sort}}&limit=3&skip=${skip}`, 'kinvey')
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
  return get(`${BASE_URL}appdata/${APP_KEY}/${type}/_count`, 'kinvey')
}

async function getFilteredCatalog (type, seacrhText = '', minPrice = 0, maxPrice = 9999) {
  return get(`${BASE_URL}appdata/${APP_KEY}/${type}?query={"name":{"$regex":"^${seacrhText}"}}&{"price":{"$gt" : "${minPrice}", "$lt" : "${maxPrice}"}}`, 'kinvey')
}

export { create, getCatalog, getDetails, deleteProduct, updateProduct, getCount, getFilteredCatalog }
