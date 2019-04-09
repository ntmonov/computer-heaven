import { BASE_URL, APP_KEY, APP_SECRET, MASTER_SECRET, USER_ROLE_ID } from './config'
import { post, put } from './crud'

const basicCredentials = 'Basic ' + window.btoa(APP_KEY + ':' + APP_SECRET)

async function register ({ username, password, email, address }) {
  const response = await window.fetch(`${BASE_URL}user/${APP_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': basicCredentials
    },
    body: JSON.stringify({ username, password, address, email })
  })
  return response.json()
}

async function login ({ username, password }) {
  const response = await window.fetch(`${BASE_URL}user/${APP_KEY}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': basicCredentials
    },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}

async function assignRole (userId) {
  const credentials = 'Basic ' + window.btoa(APP_KEY + ':' + MASTER_SECRET)

  const response = await window.fetch(`${BASE_URL}user/${APP_KEY}/${userId}/roles/${USER_ROLE_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
  return response.json()
}

async function logout () {
  const credentials = 'Kinvey ' + window.sessionStorage.getItem('authToken')
  await window.fetch(`${BASE_URL}user/${APP_KEY}/_logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
  })
}

export { register, login, assignRole, logout }
