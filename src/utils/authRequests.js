import { BASE_URL, APP_KEY, USER_ROLE_ID } from './config'
import { post, put } from './crud'

function register ({ username, password, email, address }) {
  const data = { username, password, email, address }
  return post(`${BASE_URL}user/${APP_KEY}`, 'basic', data)
}

async function login ({ username, password }) {
  const data = { username, password }
  return post(`${BASE_URL}user/${APP_KEY}/login`, 'basic', data)
}

async function assignRole (userId) {
  return put(`${BASE_URL}user/${APP_KEY}/${userId}/roles/${USER_ROLE_ID}`, 'basic')
}

async function logout () {
  return post(`${BASE_URL}user/${APP_KEY}/_logout`, 'kinvey')
}

export { register, login, assignRole, logout }
