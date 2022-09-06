import React from 'react'

const Listado = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
        <h2 className='text-3xl text-center font-bold'>
            Listado Pacientes
        </h2>
        <p className='text-xl text-center mt-2'>
            Aqui se mostraran todos tus pacientes {' '}
            <span className='text-indigo-600 font-bold'>
                Registrados
            </span>
        </p>
    </div>
  )
}

export default Listado