import { createBrowserRouter } from "react-router";
import Root from "../../Root/Root";
import Home from "../../Pages/Home";
import AddCar from "../../Pages/AddCar";
import MyListings from "../../Pages/MyListings";
import MyBookings from "../../Pages/MyBookings";
import BrowseCars from "../../Pages/BrowseCars";
import Registration from "../../Pages/Registration";
import Login from "../../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../../Pages/PageNotFound";
import CarDetails from "../../Pages/CarDetails";
import Updatecar from "../../Pages/Updatecar";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: () => fetch('http://localhost:3000/latest_cars')
            },
            {
                path: 'addCar',
                element: <PrivateRoute>
                    <AddCar />
                </PrivateRoute>

            },
            {
                path: 'myListings',
                element: <PrivateRoute>
                    <MyListings />
                </PrivateRoute>,



            },
            {
                path: 'myBookings',
                element: <PrivateRoute>
                    <MyBookings></MyBookings>
                </PrivateRoute>
            },
            {
                path: 'browseCars',
                element: <BrowseCars />,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: 'carDetails/:id',
                element: <PrivateRoute>
                    <CarDetails></CarDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`)

            },
            {
                path: 'updateCar/:id',
                element: <PrivateRoute>
                    <Updatecar></Updatecar>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`)

            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]


    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>

    }
])