import React from 'react'

const Error = ({children}) => {
  return (
    <div className='w-full bg-red-500 text-center text-white font-bold rounded-md shadow-md shadow-red-500 uppercase text-xl mb-3'>
        <p>
            {children}
        </p>
    </div>
  )
}

export default Error