import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Resister from "../components/Resister";

import PrivetRoutes from "../routes/privetRoutes";
import Orders from "../components/Orders";
import Profile from "../components/Profile";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/login",
            element:<Login/>
        },
        {
            path: "/resister",
            element:<Resister/>
        },
         {
          path:"orders",
          element: <PrivetRoutes><Orders></Orders> </PrivetRoutes>
         },
         {
          path:"profile",
          element: <PrivetRoutes> <Profile></Profile> </PrivetRoutes>
         }
      ]
    },
  ]);

  export {router}