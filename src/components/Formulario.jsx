import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='text-center text-3xl font-bold'>
            Formulario Pacientes
        </h2>
        <p className='text-xl text-center mt-2'>
            Registra tus pacientes y {' '}
            <span className='text-indigo-600 font-bold'>
                Administralos
            </span>
        </p>
    </div>
  )
}

export default Formulario