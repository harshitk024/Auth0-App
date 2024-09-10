import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'
import LoginButton from './Login.jsx'
import LogoutButton from './Logout.jsx'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

createRoot(document.getElementById('root')).render(

  <>
 
  <Auth0Provider 
         domain= "dev-fnnx2g3qr4v7m0zt.us.auth0.com" 
         clientId="cimI3C8JFrZCE16P0kjATkVhDup3eQrO"
         authorizationParams={{
          redirect_uri : window.location.origin
         }}>

    <App />
    <LoginButton />
    <LogoutButton />
  </Auth0Provider>

  </>
)
