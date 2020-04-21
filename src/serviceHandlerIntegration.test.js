import axios from 'axios'
import serviceHandlerIntegration from './serviceHandlerIntegration'

it('Can get currect stock data', async() => {
  const response = await serviceHandlerIntegration()
  expect(response.status).toEqual(200)
});

// I have the backend service which is listening on http://localhost:4000/list and it waiting for a GET request.
// With axios.get we are sending the request to the server we started and axios creates the HTTP request and the server
// creates a response and this object (currentStock) will be a response object which was created from the HTTP response
// and it has a status, data etc
// We create a variable name for the response object (it doesn't have to be the name of the table in the backend)