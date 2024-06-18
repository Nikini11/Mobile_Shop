import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleMobile from "../Shop/SingleMobile";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadMobile from "../dashboard/UploadMobile";
import ManageMobiles from "../dashboard/ManageMobiles";
import EditMobiles from "../dashboard/EditMobiles";
import Signup from "../Components/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/shop',
                element: <Shop/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/mobile/:id',
                element: <SingleMobile/>,
                loader: ({params}) => fetch(`http://localhost:5000/mobile/${params.id}`)
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadMobile/>
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageMobiles/>
            },
            {
                path: '/admin/dashboard/edit-mobiles/:id',
                element: <EditMobiles/>,
                loader: ({params}) => fetch(`http://localhost:5000/mobile/${params.id}`)
            },
        ]
    },
    {
        path: "/sign-up",
        element: <Signup/>
    }
  ]);

  export default router;
  