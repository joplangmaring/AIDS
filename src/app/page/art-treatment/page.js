import React from 'react';

const ARTSection = () => {
    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>ART</h1>

            <h2 className='text-2xl font-semibold'>ART Treatment</h2>
            <p>HIV infection is not the end of life. People can lead a healthy life for a long time with appropriate medical care. Anti-retroviral therapy (ART) effectively suppresses replication, if taken at the right time. Successful viral suppression restores the immune system and halts onset and progression of disease as well as reduces chances of getting opportunistic infections – this is how ART is aimed to work. Medication thus enhances both quality of life and longevity.</p>

            <h3 className='font-semibold'>Adherence to ART is Critical</h3>
            <p>Adherence to ART regimen is therefore very vital in this treatment. Any irregularity in following the prescribed regimen can lead to resistance to HIV drugs, and therefore can weaken or negate its effect.</p>

            <h3 className='font-semibold'>ART is Accessible to All</h3>
            <p>ART is now available free to all those who need it. Public health facilities are mandated to ensure that ART is provided to people living with HIV/AIDS (PLHA). Special emphasis is given to the treatment of sero-positive women and infected children.</p>

            <h3 className='font-semibold'>When is ART Given?</h3>

            <table className='min-w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 bg-gray-200 p-3'>WHO Clinical Staging</th>
                        <th className='border border-gray-300 bg-gray-200 p-3'>Recommendations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='border border-gray-300 p-3'>HIV Infected Adults &amp; Adolescents</th>
                        <td className='border border-gray-300 p-3'></td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>Clinical Stage I and II</td>
                        <td className='border border-gray-300 p-3'>Start ART if CD4 ≤ 500</td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>Clinical Stage III and IV</td>
                        <td className='border border-gray-300 p-3'>Start ART irrespective of CD4 count</td>
                    </tr>
                    <tr>
                        <th className='border border-gray-300 p-3'>All Pregnant / Breast Feeding Women</th>
                        <td className='border border-gray-300 p-3'></td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>All clinical Stages</td>
                        <td className='border border-gray-300 p-3'>Start ART irrespective of CD4 count</td>
                    </tr>
                    <tr>
                        <th className='border border-gray-300 p-3'>HIV-TB Co-Infected Patients</th>
                        <td className='border border-gray-300 p-3'></td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>Patients with HIV and TB co-infection<br />(Pulmonary or Extra Pulmonary)</td>
                        <td className='border border-gray-300 p-3'>Start ART irrespective of CD4 count<br />Start ATT first, initiate ART as early as possible between 2 weeks-2 months. For patients with CD4 below 50, ART might be initiated simultaneously with ATT with strict clinical and laboratory monitoring.</td>
                    </tr>
                    <tr>
                        <th className='border border-gray-300 p-3'>HIV-Hepatitis B/C Co-Infected Patients</th>
                        <td className='border border-gray-300 p-3'></td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>HIV and HBV / HCV co-infection – without any evidence of severe chronic liver disease</td>
                        <td className='border border-gray-300 p-3'>Start ART if CD4 ≤ 500</td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>HIV and HBV / HCV co-infection – with evidence of severe chronic liver disease</td>
                        <td className='border border-gray-300 p-3'>Start ART irrespective of CD4 count</td>
                    </tr>
                    <tr>
                        <th className='border border-gray-300 p-3'>HIV-Visceral Leishmaniasis (KalaAzar) Co-Infected Patients</th>
                        <td className='border border-gray-300 p-3'></td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-3'>Patients with HIV-Visceral Leishmaniasis co-infected</td>
                        <td className='border border-gray-300 p-3'>Start ART irrespective of CD4 count</td>
                    </tr>
                </tbody>
            </table>

            <p>There are 528 ART centres operating in the country as of 17th October, 2016.</p>

            <h3 className='font-semibold'>Where are these ART Centres Located?</h3>
            <p>In order to make treatment more accessible ART centres are located in medical colleges, district hospitals and non-profit charitable institutions providing care, support and treatment services to PLHA. A PLHA network person at each of the ART centre facilitates access to care and treatment services at these centres. ART centres also provide counselling and follow up on treatment adherence and support through community care centres.</p>

            <h3 className='font-semibold'>Paediatric Care and Support</h3>
            <p>The primary goal of paediatric prevention, care and treatment programme is to prevent HIV infection to newborns through Prevention of Parent to Child Transmission (PPTCT) and provide treatment and care to all children infected by HIV.</p>
        </div>
    );
};

export default ARTSection;
