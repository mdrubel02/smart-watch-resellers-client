import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Products from "../Pages/Category/CategoriesSingle/Products/Products";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SignUp/SignUp";
import Main from "./Main";
import AddProducts from "../Pages/AddProducts/AddProducts";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Admin from "../Pages/Dashboard/Admin/Admin";
import MyProducts from "../Pages/MyProducts/MyProducts";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Buyer from "../Pages/Dashboard/Buyer/Buyer";
import Sellers from "../Pages/Dashboard/Sellers/Sellers";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/signUp', element: <SingUp /> },
        { path: '/login', element: <Login /> },
        { path: '/blog', element: <Blog /> },
        { path: '/category', element: <Category /> },
        {
            path: '/productsDetails/:id', element: <Products />,
            loader: ({ params }) => fetch(`http://localhost:5000/categories-products/${params.id}`)
        },
        // {path: '/bookingModal', element: <PrivateRoute><BookingModal /></PrivateRoute>}
        { path: '/addProduct', element: <AddProducts /> },
        { path: '/myProduct', element: <MyProducts />  },
    ]
},
{
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        {path: '/dashboard/myBookings', element: <MyBookings />},
        { path: '/dashboard/allUsers', element: <AllUsers /> },
        { path: '/dashboard/admin', element: <Admin /> },
        { path: '/dashboard/allBuyers', element: <Buyer/> },
        { path: '/dashboard/allSellers', element: <Sellers /> },
    ]
}

])
export default router;