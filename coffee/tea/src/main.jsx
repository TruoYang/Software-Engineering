import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react'
import React from 'react'
import Header from './components/custom/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateTrip from './create-trip'
import Background from './components/custom/Background'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create-trip",
    element: <CreateTrip/>
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
