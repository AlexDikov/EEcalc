import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import store from './app/store.ts'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/calc">
    <StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
