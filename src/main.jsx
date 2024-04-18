import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './Login/Login';
import Register from './Register';
import AuthProvider from './Login/AuthProvider';
import Profile from './Profile';
import PvtRoute from './PvtRoute/PvtRoute';
import Update from './Update';
import CardDetails from './CardDetails';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage2 from './CaveManErrorPage/ErrorPage2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage2></ErrorPage2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PvtRoute><Profile></Profile></PvtRoute>
      },
      {
        path: '/update',
        element: <PvtRoute><Update></Update></PvtRoute>
      },
      {
        path: '/card/:idm',
        element: <PvtRoute><CardDetails></CardDetails></PvtRoute>,
        loader: () => fetch('/RealState.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
