import React from 'react';
import ribon2 from '../../assets/rebon2.jpg';
import Image from 'next/image';


const Helpline = () => {
  return (
    <div>
      {/* Mobile View */}
      <div className="flex flex-col items-center mt-20 bg-red-800 md:hidden">
        <div className="m-9 text-center">
          <h1 className="text-white font-bold text-2xl">Helpline Number</h1>
          <h1 className="text-white font-bold text-4xl">1092</h1>
          <p className="text-white underline">Toll free</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="bg-[#8b0000] h-[30vh]  flex-col md:flex-row items-center justify-around hidden md:flex">
        <div className="mt-4 text-center pl-10">
          <h1 className="font-bold text-white text-2xl md:text-3xl">Helpline Number</h1>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl text-white font-black">1097</h1>
            <p className="text-white text-lg md:text-xl font-light underline">Toll free</p>
          </div>
        </div>

        <div className="mt-4 flex items-start flex-col text-center md:text-left">
          <h1 className="text-white font-bold text-2xl md:text-5xl">Latest News</h1>
          <p className="text-white text-sm md:text-base mx-auto my-2 max-w-sm md:max-w-none">
            More than 800 students test HIV positive in this state, 47 deaths recorded....
          </p>
          <button className="bg-none text-white font-semibold mt-2 text-lg md:text-xl hover:underline">
            Read more...
          </button>
        </div>
      </div>
    </div>
  );
};

// export default Helpline;

export default Helpline;
