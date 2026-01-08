import Home from "./Components/Home/HomePage"
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router'

function App() {
  const router =createBrowserRouter([

    {
      path:"/",element: <Home/>
    }
  ])

  return <RouterProvider router={router} />
}

export default App
