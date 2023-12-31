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
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


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
        loader: ()=> fetch("https://food-chef-server-arib-web.vercel.app/chefs")
      },
      {
        path: 'chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://food-chef-server-arib-web.vercel.app/chef/${params.id}`)

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
