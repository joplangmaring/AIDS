import React from 'react';

const BloodTransfusionServices = () => {
    return (
        <div className='p-6 bg-white text-gray-800'>
            <h1 className='text-2xl font-bold mb-4'>BLOOD TRANSFUSION SERVICES: MEGHALAYA (2018-19)</h1>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Background</h2>
                <p className='mb-2'>
                    Blood is an intrinsic requirement for health care and proper functioning of the health system. 
                    Provision of safe blood is vital, as it safeguards human life.
                </p>
                <p className='mb-2'>
                    Blood Transfusion Services (BTS) is a vital part of health care. A well-organized blood transfusion 
                    service with quality systems in all areas is essential for the safe and effective use of blood and blood 
                    products through a network of licensed blood banks and storage centers with trained manpower.
                </p>
                <p>
                    The objective of BTS is to eliminate blood scarcity and ensure safe, quality blood and components 
                    are available year-round, even in remote areas.
                </p>
            </section>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Key Strategies</h2>
                <ul className='list-disc list-inside'>
                    <li>Assessing blood needs for the state.</li>
                    <li>Increasing regular voluntary blood donation to meet state requirements.</li>
                    <li>Ensuring mandatory screening tests for Transfusion Transmitted Infections (TTIs).</li>
                    <li>Promoting rational use of blood among clinicians.</li>
                    <li>Building capacity for efficient blood transfusion services.</li>
                </ul>
            </section>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Current Scenario</h2>
                <h3 className='text-lg font-semibold mt-4'>Regional Blood Transfusion Centre (RBTC)</h3>
                <p>
                    Established at the Regional Blood Bank, Pasteur Institute, Shillong in 1990, the RBTC ensures blood 
                    screening and supports licensed government and charitable blood banks in the state.
                </p>

                <h3 className='text-lg font-semibold mt-4'>State Blood Transfusion Council (SBTC), Meghalaya</h3>
                <p>
                    The SBTC, formed on March 7, 1997, is responsible for implementing blood transfusion services across 
                    the state, coordinating with the State AIDS Control Society to streamline services in accordance with 
                    the National Blood Policy.
                </p>

                <h3 className='text-lg font-semibold mt-4'>SBTC Members</h3>
                <table className='w-full border mt-4'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2 bg-gray-200'>#</th>
                            <th className='border px-4 py-2 bg-gray-200'>Name</th>
                            <th className='border px-4 py-2 bg-gray-200'>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className='border px-4 py-2'>1</td><td className='border px-4 py-2'>Addl. Chief Secretary, Health &amp; Family Welfare Department, Govt. of Meghalaya, Shillong</td><td className='border px-4 py-2'>President</td></tr>
                        <tr><td className='border px-4 py-2'>2</td><td className='border px-4 py-2'>Principal Secretary/Commissioner &amp; Secretary to the Government of Meghalaya, Finance Deptt , Shillong or Representative.</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>3</td><td className='border px-4 py-2'>Secretary to the Government of Meghalaya, Health &amp; Family Welfare Department, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>4</td><td className='border px-4 py-2'>Director of Health Services (MI), Govt. of Meghalaya, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>5</td><td className='border px-4 py-2'>Director of Health Services (Research etc), Govt. of Meghalaya, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>6</td><td className='border px-4 py-2'>Director of Health Services (MCH&amp;FW) and Joint Mission Director, NHM, Govt. of Meghalaya, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>7</td><td className='border px-4 py-2'>Project Director, Meghalaya State AIDS Control Society, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>8</td><td className='border px-4 py-2'>In-Charge Regional Blood Bank, Pasteur Institute, Shillong</td><td className='border px-4 py-2'>Member Secretary</td></tr>
                        <tr><td className='border px-4 py-2'>9</td><td className='border px-4 py-2'>Assistant Drug Controller, Government of Meghalaya, Shillong.</td><td className='border px-4 py-2'>Member</td></tr>
                        <tr><td className='border px-4 py-2'>10</td><td className='border px-4 py-2'>Consultant (VBD), Meghalaya State AIDS Control Society, Shillong</td><td className='border px-4 py-2'>Member</td></tr>
                        {/* Additional rows continue */}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default BloodTransfusionServices;
