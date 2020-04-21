import axios from 'axios'

async function serviceHandlerIntegration () {
  const currentStock = await axios.get('http://localhost:4000/list')
  console.log(currentStock)
  return currentStock
}

serviceHandlerIntegration()

export default serviceHandlerIntegration