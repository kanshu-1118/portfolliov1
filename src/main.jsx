import "./css/ress.css";
import "./sass/_asset.scss"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { route } from "./route.jsx";
import { RouterProvider } from "react-router";
// import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)