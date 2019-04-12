import { BASE_URL, APP_KEY } from './config'
import { get } from './crud'

function getSearchCatalog (type, searchName, minPrice, maxPrice) {
  return get(`${BASE_URL}appdata/${APP_KEY}/${type}?query={"$and":[{"price":{"$gt":"${minPrice}"}}, {"price":{"$lt":"${maxPrice}"}}, {"name":{"$regex":"^${searchName}"}}]}`, 'kinvey')
}

export { getSearchCatalog }
