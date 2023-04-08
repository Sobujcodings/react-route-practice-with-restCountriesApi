import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About'
import Home from './Components/Countries/Countries'
import Countries from './Components/Countries/Countries'
import CountryDetails from './Components/CountryDetails/CountryDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [

      //ai home keo / e outset e boshanor joono arekta compo baniye nilam
      {
        path: '/',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },



      {
        // ekhane /country holo params akta object r country id holo jeta padhiye paichi
        // Dynamic fetch e template string use korte hobe
        path: '/country/:countryId',
        element: <CountryDetails></CountryDetails> ,
        loader: ({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      },



      {
        path: '/header',
        element: <Header></Header>
      },

      {
        path: '/footer',
        element: <Footer></Footer>
      },

      {
        path: '/about',
        element: <About></About>
      },


    ]
  },

])



// app jehetu render kora ache tai app k root rakhi tar vhitore child route dibo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
