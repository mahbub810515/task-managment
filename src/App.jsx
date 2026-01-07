import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },    
    {
      path:"/signup",
      element:<SignUp/>
    },    
    {
      path:"*",
      element:<NotFound/>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
