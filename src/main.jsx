import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import './style.css'
import './App.css'
import 'animate.css';
import App from './App'
import DataProvider from './UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-xn2ddmb4e3urzztj.us.auth0.com"
      clientId="XkcNo36XsCYvrYfxqaYopLx4lU9OBFrb"
      authorizationParams={{
        redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
  >
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
    
  </Auth0Provider>
  </StrictMode>,
)
