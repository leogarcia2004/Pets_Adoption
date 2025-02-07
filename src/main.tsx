import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import WidthContext from './context/WidthContext.tsx'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WidthContext>
          <App />
      </WidthContext> 
    </BrowserRouter> 
  </StrictMode>,
)