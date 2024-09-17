import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import Login from './Components/Login-page/Login.jsx';
import Home from './Components/HomePage/Home.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import Plan from './Components/PlanPage/Plan.jsx';
import Categories from './Components/Category/Categories.jsx';
import { MovieInfo } from './Components/MovieInfo/MovieInfo.jsx';
import { WatchMovie } from './Components/Watch/WatchMovie.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element:<Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path:"/plans",
    element: <Plan />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path:"/movie/:id/:name",
    element:<MovieInfo/>
  },
  {
    path:"/watch/:id/:name",
    element:<WatchMovie/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
