import { BASE_URL, APP_KEY } from './config'

async function addToCart (data) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')

  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

async function getCart () {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  let userId = window.sessionStorage.getItem('userId')
  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/cart/?query={"userId":"${userId}"}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

async function getProductById (productId, type) {
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

function getAllProducts (type, cart) {
  let products = cart.filter(c => c.type === type)
  return products
}

export { addToCart, getCart, getProductById, getAllProducts }
