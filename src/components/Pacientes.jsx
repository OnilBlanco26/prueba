import React from 'react'

const Pacientes = () => {
  return (
    <div className='bg-white py-10 px-5 rounded-md shadow-lg shadow-indigo-600'>
    <p className='uppercase font-bold mb-2'>
      Nombre:{' '}
      <span className='normal-case fot-normal'>
        Thor
      </span>
    </p>

    <p className='uppercase font-bold mb-2'>
      Propietario:{' '}
      <span className='normal-case fot-normal'>
        Fulanito
      </span>
    </p>

    <p className='uppercase font-bold mb-2'>
      Correo:{' '}
      <span className='normal-case fot-normal'>
        correo@correo.com 
      </span>
    </p>

    <p className='uppercase font-bold mb-2'>
      Fecha Ingreso:{' '}
      <span className='normal-case fot-normal'>
        22/10/2022
      </span>
    </p>

    <p className='uppercase font-bold mb-2'>
      Observaciones:{' '}
      <span className='normal-case font-normal'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vel corporis maxime deserunt.
         Facere illum, quaerat totam qui blanditiis incidunt tenetur,
         aut nesciunt tempora culpa perferendis atque delectus alias dolores?
      </span>
    </p>
  </div>
  )
}

export default Pacientes