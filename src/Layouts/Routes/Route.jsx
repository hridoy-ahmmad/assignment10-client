import { createBrowserRouter } from "react-router";
import Root from "../../Root/Root";
import Home from "../../Pages/Home";
import AddCar from "../../Pages/AddCar";
import MyListings from "../../Pages/MyListings";
import MyBookings from "../../Pages/MyBookings";
import BrowseCars from "../../Pages/BrowseCars";
import Registration from "../../Pages/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: 'addCar',
                element: <AddCar />
            },
            {
                path: 'myListings',
                element: <MyListings />
            },
            {
                path: 'myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: 'browseCars',
                element: <BrowseCars />,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path:'registration',
                element:<Registration/>
            }
        ]

    }
])