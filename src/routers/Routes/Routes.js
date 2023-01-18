import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddCategorie from "../../pages/Dashboard/AdminDashboard/Categories/AddCategorie";
import AddProduct from "../../pages/Dashboard/AdminDashboard/AddProduct";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashboard";
import Home from "../../pages/Home/Home";
import AddSubCategorie from "../../pages/Dashboard/AdminDashboard/Categories/AddSubCategorie";
// import Dashboard from "../../pages/Dashboard/Dashboard";
import AdminLayout from "../../Layout/AdminLayout";
import CategoriesList from "../../pages/Dashboard/AdminDashboard/Categories/CategoriesList";
import ProductDetails from "../../pages/Products/ProductDetails";
import AllProducts from "../../pages/Dashboard/AdminDashboard/AllProductsList";
import ProductsByCategorie from "../../pages/Products/ProductsByCategorie";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import CartList from "../../pages/Cart/CartList";
import CheckOut from "../../pages/CheckOut/CheckOut";
import PaymentType from "../../pages/CheckOut/PaymentType";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OrderDetails from "../../pages/Dashboard/AdminDashboard/OrderAdmin/OrderDetails";
import UserDashboard from "../../pages/Dashboard/UserDashboard/UserDashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Home></Home>
            },
            {
                path: '/product/details/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/categorie/products/:id',
                element: <ProductsByCategorie></ProductsByCategorie>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <Home></Home>
            },
            {
                path: '/dashboard/user',
                element: <UserDashboard></UserDashboard>
            },
            {
                path: '/cart',
                element: <CartList></CartList>
            },
            {
                path: '/checkout',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/paymentType',
                element: <PrivateRoute><PaymentType></PaymentType></PrivateRoute>
            }

        ],

    },
    {
        path: '/dashboard',
        element: <AdminLayout></AdminLayout>,
        children: [
            // {
            //     path:'/dashboard',
            //     element: <Dashboard></Dashboard>
            // },
            {
                path: '/dashboard/admin',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: '/dashboard/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/orderDetails/:id',
                element: <OrderDetails></OrderDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/orders/admin/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/categoriesList',
                element: <CategoriesList></CategoriesList>
            },
            {
                path: '/dashboard/addCategories',
                element: <AddCategorie></AddCategorie>
            },
            {
                path: '/dashboard/addSubCategories',
                element: <AddSubCategorie></AddSubCategorie>
            },
        ]
    },
])

export default router;