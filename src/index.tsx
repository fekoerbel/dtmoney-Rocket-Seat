import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api'; //http://localhost:3000/api/transactions como este é o endereço, todas as chamadas /api serão como chamadas que queremos direcionar para miragejs  
  
    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })
    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
