import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './configureStore'
import { App } from './App'

const store = configureStore()

const appId = process.env.APP_ID || 'root'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(appId)
)
