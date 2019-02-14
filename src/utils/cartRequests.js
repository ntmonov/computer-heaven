import { BASE_URL, APP_KEY } from './config'

async function addToCart (data) {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')

  const response = await window.fetch(`${BASE_URL}appdata/${APP_KEY}/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export { addToCart }
