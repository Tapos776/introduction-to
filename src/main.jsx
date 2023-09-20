/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import Foot from './Components/Foot/foot.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import CallDetails from './Components/CallDetails/CallDetails.jsx';
import Phone from './Components/Phone/Phone.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErroePage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users/1/posts'),
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/contact/:contactId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/1/posts/${params.contactId}`),
        element: <CallDetails></CallDetails>
      },
     
      {
        path: '/foot',
        element: <Foot></Foot>
      },
      {
        path: '/phone',
        loader:()=> fetch('https://openapi.programming-hero.com/api/phones?search=iphone'),
        element: <Phone></Phone>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      },


    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} > </RouterProvider>
  </React.StrictMode>,
)
