import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'


function App() {


  return (
    <div>
      <Header />
      <div>
        <Formulario />
        <Listado />
      </div>
    </div>
  )
}

export default App
