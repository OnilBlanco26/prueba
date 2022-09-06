import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'


function App() {

  const [pacientes,setPacientes] = useState([]);

  return (

    

    <div>
      <Header />
      <div className='mt-10 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <Listado />
      </div>
    </div>
  )
}

export default App
