import axios from 'axios'

export async function getCurrentStock () {
  const currentStock = await axios.get('http://localhost:4000/list')
  return currentStock
}

export async function addToCurrentStock (item) {
  const add = await axios.post('http://localhost:4000/add-ingredient', (item))
  return add
}

export async function deleteFromCurrentStock (id) {
  const deleteItem = await axios.delete('http://localhost:4000/delete-ingredient', (id))
}