import { createBrowserRouter } from "react-router-dom"; 
import Index from './pages/index';
import Works from './pages/works';
import Profile from './pages/profile';
import Contact from './pages/contact';



const route = createBrowserRouter ([
    {
        path:"/",
        element:<Index />,
    },
    {
        path:"/works",
        element:<Works />,
    },
    {
        path:"/profile",
        element:<Profile />,
    },
    {
        path:"/contact",
        element:<Contact />,
    },
]);

export {route}