import React from 'react'
import { CSSTransition } from 'react-transition-group';
import { RouterProvider } from "react-router";
import { route } from "./route.jsx";
import { useRef } from 'react';
import './sass/routeStyle.scss'


const App = () => {
    const pathname = useRef(null);
    const timeout = { enter: 1000, exit: 1000 };

    return (
        <CSSTransition key={pathname} timeout={timeout} classNames="slider">
            <div ref={pathname}>
                <RouterProvider router={route} />
            </div>
        </CSSTransition>
    )
}

export default App