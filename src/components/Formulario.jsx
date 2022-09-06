import {useState, useEffect} from 'react'

const Formulario = () => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario]= useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if([mascota, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='text-center text-3xl font-bold'>
            Formulario Pacientes
        </h2>
        <p className='text-xl text-center mt-2 mb-5'>
            Registra tus pacientes y {' '}
            <span className='text-indigo-600 font-bold'>
                Administralos
            </span>
        </p>

        <form className='bg-white py-10 px-5 rounded-md shadow-md shadow-indigo-600 mx-2'>
          <div className='mb-3'>
            <label htmlFor="mascota" className='block text-indigo-600 font-bold'>
              Nombre Mascota 
            </label>
            <input 
            id='mascota'
            type="text"
            placeholder='Escribe el nombre de la mascota'
            className='border-2 border-gray-400 w-full p-2 rounded-md hover:border-indigo-600'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="propietario" className='block text-indigo-600 font-bold'>
              Nombre Propietario 
            </label>
            <input 
            id='propietario'
            type="text"
            placeholder='Escribe el nombre del propietario'
            className='border-2 border-gray-400 w-full p-2 rounded-md hover:border-indigo-600'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email" className='block text-indigo-600 font-bold'>
               Contacto Propietario
            </label>
            <input 
            id='email'
            type="email"
            placeholder='Escribe el contacto del propietario'
            className='border-2 border-gray-400 w-full p-2 rounded-md hover:border-indigo-600'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email" className='block text-indigo-600 font-bold'>
               Fecha Ingreso
            </label>
            <input 
            id='fecha'
            type="date"
            className='border-2 border-gray-400 w-full p-2 rounded-md hover:border-indigo-600'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="sintomas" className='block text-indigo-600 font-bold'>
               Observaciones
            </label>
            <textarea 
            id='sintomas'
            type="text"
            placeholder='Describa los sintomas del paciente'
            className='border-2 border-gray-400 w-full p-2 rounded-md hover:border-indigo-600'
            />
          </div>

          <input type="submit"
          value={'Registrar Pacientes'}
          className='w-full bg-indigo-600 p-2 text-white uppercase text-xl rounded-md cursor-pointer hover:bg-indigo-400 shadow-md shadow-indigo-500 transition-all duration-500 font-bold'
          />
          
          
          
        </form>
    </div>
  )
}

export default Formulario