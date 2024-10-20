import React from 'react';
import imagemap from '../../assets/map.png';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";

const Map = () => {
  return (
    <div className="relative flex justify-center">
      <Image 
        src={imagemap} 
        alt="Map" 
        className="w-full h-[60vh] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className='flex  items-center mb-2'>
          <div className="bg-red-600 rounded-full p-[6px]">
            <IoLocationOutline className="text-white md:text-2xl" />
          </div>
          <h1 className="text-white text-[20px] md:text-[29px] font-bold">Find this service near you</h1>
        </div>
        <div className='flex'>
          <input 
            type="text" 
            className=" p-3 md:p-4 rounded border border-gray-400 outline-none md:w-[330px] max-w-[100%] placeholder:text-base" 
            placeholder="Enter location..." 
          />
          <button className='bg-red-800 p-2 text-white ml-2 text-base'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
