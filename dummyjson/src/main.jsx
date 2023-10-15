import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './context/StateContext.jsx'
// import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StateContextProvider>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </StateContextProvider>
  </BrowserRouter>
)
