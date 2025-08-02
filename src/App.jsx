import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Courses from './pages/Courses'
import BlogDetail from './pages/BlogDetail'
import ViewCourses from './pages/ViewCourses'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
          <Navbar />
          <Home />
      </div>
    },
    {
      path: '/about',
      element:
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/blog',
      element:
      <div>
        <Navbar />
        <Blog />
      </div>
    },
    {
      path: '/blog/:id',
      element:
      <div>
        <Navbar />
        <BlogDetail />
      </div>
    },
    {
      path: '/courses',
      element:
      <div>
        <Navbar />
        <Courses />
      </div>
    },
    {
      path: '/courses/:id',
      element:
      <div>
        <Navbar />
        <ViewCourses />
      </div>
    },
    {
      path: '/contact',
      element:
      <div>
        <Navbar />
        <Contact />
      </div>
    },
  ]
);

const App = () => {
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
      
      
  )
}

export default App
