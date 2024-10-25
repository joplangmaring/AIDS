import React from 'react'
// import Form from '../components/form';
import Form from "../../components/form"

const page = () => {
  return (
    <div className='px-10 py-10 space-y-5 w-full'>
        <h1 className='text-4xl font-bold text-[#8B0000]'>Complaint Form</h1>
        <p>Please fill out the form with your complaint. We will get back to you as soon as possible.</p>
        <Form />
    </div>
  )
}

export default page