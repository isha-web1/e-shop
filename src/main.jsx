import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
   
  </RouterProvider>,
)
