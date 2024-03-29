import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { store } from './reducers/store'
import { Provider } from 'react-redux'

const root = createRoot(window.document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)