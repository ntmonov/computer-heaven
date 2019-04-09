import { BASE_URL, APP_KEY } from './config'
import { delComments } from './commentRequests'

async function create (type, data) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')

  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

async function getCatalog (type, sortMethod, page) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const sort = (sortMethod === 'ASC') ? '1' : '-1'
  const skip = (page - 1) * 3

  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}?sort={"price": ${sort}}&limit=3&skip=${skip}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

async function getDetails (productId, type) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

async function deleteProduct (productId, type) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  await delComments(type, productId)
  return response.json()
}

async function updateProduct (productId, type, data) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

async function getCount (type) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}/_count`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

async function getFilteredCatalog (type, seacrhText = '', minPrice = 0, maxPrice = 9999) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/${type}?query={"name":{"$regex":"^${seacrhText}"}}&{"price":{"$gt" : "${minPrice}", "$lt" : "${maxPrice}"}}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

export { create, getCatalog, getDetails, deleteProduct, updateProduct, getCount, getFilteredCatalog }
