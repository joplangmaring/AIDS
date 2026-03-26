import React from 'react'
import Form from './form'

const ComplaintForm = () => {
  return (
    <div className='section-padding bg-white'>
      <div className='max-w-screen-lg mx-auto'>
        <h3 className='text-2xl md:text-4xl text-gray-900 md:text-left text-center font-bold uppercase tracking-tight'>Complaint Form</h3>
        <p className='mt-2 mb-6 md:text-left text-center text-gray-500 text-sm md:text-base'>Please fill out the form with your complaint. We will get back to you as soon as possible.</p>
        <Form />
      </div>
    </div>
  )
}

export default ComplaintForm
