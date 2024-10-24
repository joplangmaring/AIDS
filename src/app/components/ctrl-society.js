import Image from 'next/image';
import person from '../../assets/person.png';
import background from '../../assets/background-hero.png';

const Logos = () => {
  return (
    <div 
      className="relative flex justify-around  bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="flex flex-col items-start z-10">
        <h1 className="font-bold text-5xl text-white">MEGHALAYA AIDS</h1>
        <h1 className="font-bold text-5xl text-white">CONTROL SOCIETY</h1>
        <div className="text-white mt-4">
          <p>NACO envisions an India where every person living with HIV has</p>
          <p>access to quality care and is treated with dignity.</p>
        </div>
      </div>

      <div className="z-10 mt-44">
        <Image src={person} alt="Person" width={200} />
      </div>

      {/* Adding overlay to improve text readability */}
      <div className="absolute inset-0 bg-[#000000B2] z-0"></div>
    </div>
  );
};

export default Logos;
