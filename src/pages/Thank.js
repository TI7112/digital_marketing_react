import React from 'react'
import { useNavigate } from 'react-router-dom';

const Thank = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/')
    }, 5000);
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <p className='text-3xl font-bold'>Thank for your Interest</p>
    </div>
  )
}

export default Thank