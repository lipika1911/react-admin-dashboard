import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Users from './pages/users/Users.tsx';
import Products from './pages/products/Products.tsx';
import Home from './pages/home/Home.tsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
