import React from 'react';

const BloodTransfusionServices = () => {
    return (
        <div className='p-6 px-10 bg-white text-gray-800'>
            <h1 className='text-2xl font-bold mb-4'>BLOOD TRANSFUSION SERVICES: MEGHALAYA (2018-19)</h1>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Background</h2>
                <p className='mb-2'>
                    Blood transfusion services plays a vital role in saving lives during surgeries, trauma situations, childbirth complications and for patients with certain medical conditions like anemia, cancer and undergoing hemodialysis.
                </p>
                <p className='mb-2'>
                    Blood transfusion services ensure that blood is collected, processed, tested, stored and distributed safely to meet the demand for blood products in healthcare settings. Strict protocols and guidelines are followed to maintain the quality and safety of blood supply including thorough screening of donors, testing for infections, proper storage methods and matching blood types to recipients. These services help in managing blood shortages and emergencies by organizing blood donation drives and encouraging regular blood donations from the community.
                </p>
                <p>
                    Overall blood transfusion services is essential for providing timely and life saving intervention to patients in need of blood transfusion services.
                </p>
            </section>

            <h2 className='text-xl font-semibold mb-2'>Name of Blood Centres in Meghalaya</h2>
            <ul className='list-disc list-inside space-y-2'>
                <li>Regional Blood Centre, Pasteur Institute, Lawmali, Shillong</li>
                <li>Blood Centre, NEIGRIHMS, Mawdiangdiang, Shillong</li>
                <li>Blood Centre, Nazareth Hospital, Laitumkhrah, Shillong</li>
                <li>Blood Centre, Dr.H.Gordon Roberts Hospital, Jaiaw, Shillong</li>
                <li>Blood Centre, Military Hospital, Shillong</li>
                <li>Blood Centre, Nongpoh Civil Hospital, Nongpoh, Ri Bhoi</li>
                <li>Blood Centre, Nongstoin Civil Hospital, Nongstoin</li>
                <li>Blood Centre, Jowai Civil Hospital, Panaliar</li>
                <li>Blood Centre, Tura Civil Hospital, Tura</li>
                <li>Blood Centre, Williamnagar Civil Hospital, Williamnagar</li>
            </ul>

            <section className='my-6'>
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
