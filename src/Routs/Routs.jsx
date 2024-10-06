import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRoutes from "./PrivetRoutes";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home> ,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivetRoutes><News></News></PrivetRoutes> ,
            },
            {
                path:'/about',
                element: <Home></Home> ,
            },
            {
                path:'/career',
                element: <Home></Home> ,
            },
            {
                path:'/login',
                element: <Login></Login> ,
            }
            ,
            {
                path:'/register',
                element: <Register></Register> ,
            }
        ]
    }
]);

export default routes;