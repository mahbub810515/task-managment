import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<div>Home</div>
    },
    {
      path:"/about",
      element:<div>About</div>
    },
    {
      path:"/contact",
      element:<div>Contact</div>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
