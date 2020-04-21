import axios from 'axios'

export async function serviceHandlerIntegration () {
  const currentStock = await axios.get('http://localhost:4000/list')
  return currentStock
}

export async function addToCurrentStock (item) {
  const add = await axios.post('http://localhost:4000/add-ingredient', (item))
  return add
}
