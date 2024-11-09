import React from 'react'
import Form from './form'



const ComplaintForm = () => {
  return (
    <div className=' md:px-10 px-5 py-10 bg-black text-white'>
        <h3 className='md:text-5xl text-3xl text-[#FE0300] md:text-left text-center font-bold uppercase'>Complaint Form</h3>
        <p className='mb-5 md:text-left text-center'>Please fill out the form with your complaint. We will get back to you as soon as possible.</p>
        <Form></Form>
    </div>
  )
}

export default ComplaintForm