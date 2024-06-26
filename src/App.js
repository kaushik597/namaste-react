import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Signup from "./components/Signup";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import( "./components/About"));
const Footer =()=>{
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}



const AppComponent =() => {
return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
)
}

const appRouter= createBrowserRouter([
    {
        path:'/',
        element: <AppComponent />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
            path:'/about',
            element:<Suspense fallback={<h1>About page</h1>}><About /></Suspense>
        },
        {
            path:'contact',
            element:<Contact />
        },
        {
            path:'signup',
            element:<Signup />
        },
        {
            path:'/restaurants/:resid',
            element:<RestaurantMenu />
        },
        {
            path:'grocery',
            element:<Suspense fallback={<h1>loading....</h1>}><Grocery /></Suspense>
        }
    ],
        errorElement: <Error />
    },
   
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);