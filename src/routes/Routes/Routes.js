import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddNewFood from "../../Pages/AddNewFood/AddNewFood/AddNewFood";
import AllFoods from "../../Pages/AllFoods/AllFoods/AllFoods";
import FoodDetails from "../../Pages/AllFoods/FoodDetails/FoodDetails";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/ManageUsers/LogIn/LogIn";
import Registration from "../../Pages/ManageUsers/Registration/Registration";
import MyReviews from "../../Pages/MyReviews/MyReviews/MyReviews";
import ReviewUpdate from "../../Pages/MyReviews/ReviewUpdate/ReviewUpdate";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllFoods></AllFoods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/services/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviewUpdate/:id',
                element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/singleReview/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addNewFood',
                element: <PrivateRoute><AddNewFood></AddNewFood></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])