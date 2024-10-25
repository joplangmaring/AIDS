import React from 'react';

const BasicServices = () => {
    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>Basic Services</h1>
            <hr />
            <p>
                The Basic Services Division of the National AIDS Control Organisation provides HIV counseling and testing services for HIV infection, the critical first step in detecting and linking people with HIV to access the treatment cascade and care. These services have been offered since 1997, aiming to identify as many people living with HIV as early as possible after acquiring the infection and linking them appropriately and in a timely manner to prevention, care, and treatment services. The introduction of ART services for people living with HIV/AIDS in 2004 gave a significant boost to counseling and testing services in India.
            </p>

            <h2 className='text-2xl font-bold'>HIV Counseling and Testing Services Components:</h2>
            <ol className='list-decimal list-inside'>
                <li>
                    <a 
                        href='http://naco.gov.in/hiv-counselling-and-testing-services-hcts' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='text-blue-600 hover:underline'
                    >
                        HIV Counseling for At-Risk Populations
                    </a>
                </li>
                <li>
                    <a 
                        href='http://naco.gov.in/elimination-vertical-transmission-hiv-syphilis' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='text-blue-600 hover:underline'
                    >
                        Elimination of Vertical Transmission of HIV & Syphilis
                    </a>
                </li>
                <li>HIV/Tuberculosis Collaborative Activities</li>
            </ol>
        </div>
    );
};

export default BasicServices;
