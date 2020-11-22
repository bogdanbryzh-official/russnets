import { StrictMode } from 'react'
import { render } from 'react-dom'

import 'normalize.css'
import './styles/index.sass'

import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)