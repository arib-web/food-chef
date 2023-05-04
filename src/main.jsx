import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import './index.css'
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Chefs from './components/Chefs/Chefs.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import LoadingSpinner from './components/LoadiSpinner/LoadingSpinner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>,
        loader: ()=> fetch("http://localhost:5000/chefs")
      },
      {
        path: 'chef/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)

      },
      {
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'register',
        element: <Register></Register>
       },
       {
        path: 'loader',
        element: <LoadingSpinner />,
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
