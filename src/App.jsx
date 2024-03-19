import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CrearPost } from './componentes/CrearPost';
import { EditarPost } from './componentes/EditarPost';
import { InicioSesion } from './componentes/InicioSesion';
import { Muro } from './componentes/Muro';
import { Registro } from './componentes/Registro';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<InicioSesion/>} />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/muro' element = {<Muro/>} />
        <Route path='/crearPost' element = {<CrearPost/>} />
        <Route path='/editarPost/:idPost' element = {<EditarPost/>} />
      </Routes>
    </BrowserRouter>

    //<Registro />
  )
}

export default App; 