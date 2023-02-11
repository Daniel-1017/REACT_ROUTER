import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"

const routeDifinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
)

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Products /> },
// ])

const router = createBrowserRouter(routeDifinition)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
