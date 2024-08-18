import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
//console.warn(process.env.DB_URL)
import P404 from './screens/404';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Favoritos from './screens/Favoritos/Favoritos';
import Provas from './screens/Provas/Provas';
import Perfil from './screens/Perfil/Perfil';
import Registro from './screens/Registro/Registro';
import Dados from './screens/Dados/Dados';
import Alugueis from './screens/Alugueis/Alugueis';
import Verificacao from './screens/Verificacao/Verificacao';
import Verificacao2 from './screens/Verificacao2/Verificacao2';
import Concluido from './screens/Concluido/Concluido';

const telas = createBrowserRouter([
  {
    path: "/",
		element: <Home />,
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
  {
    path: "/verificacao",
    element: <Verificacao />,
		errorElement: <P404 />
  },
  {
    path: "/verificacao2",
    element: <Verificacao2 />,
		errorElement: <P404 />
  },
  {
    path: "/concluido",
    element: <Concluido />,
		errorElement: <P404 />
  },
  {
    path: "/perfil",
    element: <Perfil />,
		errorElement: <P404 />
  },
  {
    path: "/dados",
    element: <Dados />,
		errorElement: <P404 />
  },
  {
    path: "/alugueis",
    element: <Alugueis />,
		errorElement: <P404 />
  },
]);


export default function router(){
  return (
		<RouterProvider router={telas} />
	)
}