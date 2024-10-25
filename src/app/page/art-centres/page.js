import React from 'react';

const CareSupportAndTreatment = () => {

    const services = [
        "ART Plus Centre - Civil Hospital Shillong",
        "ART (PPP) – NEIGRIHMS",
        "Link ART Centre – Tura Civil Hospital (Tura)",
        "Jowai Civil Hospital (Ialong)",
        "Nongstoin Civil Hospital (Nongstoin)",
        "Care Support Centre – Lachumiere, Shillong"
    ];


    return (
        <div className='px-10 py-10 space-y-5'>
            <div className='px-10 py-10'>
            <strong className='text-xl'>SERVICES AVAILABLE IN MEGHALAYA:</strong>
            <ul className='mt-4 list-disc list-inside'>
                {services.map((service, index) => (
                    <li key={index} className='py-1'>{service}</li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default CareSupportAndTreatment;
