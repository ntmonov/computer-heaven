export default function validate (product) {
  let isValid = true
  let errors = {}
  if (!/^[A-Za-z0-9]{3,}/.test(product.name)) {
    isValid = false
    errors['name'] = 'Name must be at laest 3 letters or digits'
  }

  if (!/^[A-Za-z0-9]{3,}/.test(product.description)) {
    isValid = false
    errors['description'] = 'Description must be at laest 3 letters or digits'
  }

  if (product.hasOwnProperty('frequency') && product.frequency < 0) {
    isValid = false
    errors['frequency'] = 'Frequency must be a positive number'
  }

  if (product.hasOwnProperty('tdp') && product.tdp < 0) {
    isValid = false
    errors['tdp'] = 'TDP must be a positive number'
  }

  if (product.price < 0) {
    isValid = false
    errors['price'] = 'Price must be a positive number'
  }

  if (product.hasOwnProperty('cpu') && !/^[A-Za-z0-9]{3,}/.test(product.cpu)) {
    isValid = false
    errors['cpu'] = 'CPU must be at laest 3 letters or digits'
  }

  if (product.hasOwnProperty('video') && !/^[A-Za-z0-9]{3,}/.test(product.video)) {
    isValid = false
    errors['video'] = 'Video card must be at laest 3 letters or digits'
  }

  if (product.hasOwnProperty('resolution') && !/^[A-Za-z0-9]{3,}/.test(product.resolution)) {
    isValid = false
    errors['resolution'] = 'Resolution must be at laest 3 letters or digits'
  }

  if (product.hasOwnProperty('chipset') && !/^[A-Za-z0-9]{3,}/.test(product.chipset)) {
    isValid = false
    errors['chipset'] = 'Chipset must be at laest 3 letters or digits'
  }

  if (product.hasOwnProperty('capacity') && product.capacity < 0) {
    isValid = false
    errors['capacity'] = 'Capacity must be a positive number'
  }

  return { isValid, errors }
}
