import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import P404 from './screens/404';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Favoritos from './screens/Favoritos/Favoritos';
import Provas from './screens/Provas/Provas';
import Registro from './screens/Registro/Registro';

const telas = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
		errorElement: <P404 />
  },
  {
    path: "/login",
    element: <Login />,
		errorElement: <P404 />
  },
  {
    path: "/registrar-se",
    element: <Registro />,
		errorElement: <P404 />
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
		errorElement: <P404 />
  },
  {
    path: "/provas",
    element: <Provas />,
		errorElement: <P404 />
  },
]);


export default function router(){
  return (
		<RouterProvider router={telas} />
	)
}