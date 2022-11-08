import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddNewFood from "../../Pages/AddNewFood/AddNewFood/AddNewFood";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addNewFood',
                element: <AddNewFood></AddNewFood>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])