import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Resister from "../components/Resister";

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
      ]
    },
  ]);

  export {router}