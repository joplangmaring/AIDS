import React from 'react';

const ICTCInformation = () => {
    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>ICTC in the State</h1>
            <p>
                An Integrated Counselling and Testing Centre (ICTC) is a place where a person is voluntarily counselled and tested for HIV or as per advice by a medical provider, and confidentiality is strictly maintained. The main functions of an ICTC include early detection of HIV, provision of basic information on modes of transmission and prevention of HIV/AIDS for promoting behavioural change and reducing vulnerability, and linking people with other HIV prevention, care, and treatment services. 
                There are 16 Stand Alone ICTCs, 5 PPP-ICTCs (Public Private Partnership), 49 F-ICTCs (Facility Integrated), and 3 Mobile ICTCs catering to Targeted Intervention (TI) Sites and far-flung areas in Meghalaya:
            </p>

            <h2 className='text-2xl font-bold'>Major Achievement</h2>
            <p>
                3 (Three) Mobile ICTCs were launched to cater to the needs of the people of the State, with one located in Shillong covering East Khasi Hills, West Khasi Hills, and Ri Bhoi District, one mobile ICTC catering to Jaintia Hills Districts, and the other at Tura covering West Garo Hills, East Garo Hills, and South Garo Hills Districts of Meghalaya.
            </p>

            <h2 className='text-xl font-bold'>List of ICTCs in the State:</h2>

            <h3 className='text-lg font-bold'>Standalone ICTCs</h3>
            <table className='table-auto w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2'>Sl.No</th>
                        <th className='border border-gray-300 p-2'>District</th>
                        <th className='border border-gray-300 p-2'>Name of Standalone ICTC</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { sl: 1, district: 'East Khasi Hills', name: 'Ganesh Das Hospital' },
                        { sl: 2, district: '', name: 'Shillong Civil Hospital' },
                        { sl: 3, district: '', name: 'NEIGRIHMS' },
                        { sl: 4, district: '', name: 'Mawryngkneng PHC' },
                        { sl: 5, district: 'West Khasi Hills', name: 'Nongstoin Civil Hospital' },
                        { sl: 6, district: 'South West Khasi Hills', name: 'Mawkyrwat CHC' },
                        { sl: 7, district: 'Ri Bhoi', name: 'Umsning CHC' },
                        { sl: 8, district: '', name: 'Byrnihat PHC' },
                        { sl: 9, district: '', name: 'Nongpoh Civil Hospital' },
                        { sl: 10, district: 'West Jaintia Hills', name: 'Jowai Civil Hospital' },
                        { sl: 11, district: 'East Jaintia Hills', name: 'Khliehriat CHC' },
                        { sl: 12, district: 'East Garo Hills', name: 'Williamnagar Civil Hospital' },
                        { sl: 13, district: 'West Garo Hills', name: 'Tura Civil Hospital' },
                        { sl: 14, district: '', name: 'Tura MCH' },
                        { sl: 15, district: '', name: 'Phulbari CHC' },
                        { sl: 16, district: 'South Garo Hills', name: 'Baghmara Civil Hospital' },
                        { sl: 17, district: 'Khasi Hills', name: 'Mobile (Shillong Unit)' },
                        { sl: 18, district: 'Jaintia Hills', name: 'Mobile (Jaintia Unit)' },
                        { sl: 19, district: 'Garo Hills', name: 'Mobile (Tura Unit)' }
                    ].map((ictc) => (
                        <tr key={ictc.sl}>
                            <td className='border border-gray-300 p-2'>{ictc.sl}</td>
                            <td className='border border-gray-300 p-2'>{ictc.district}</td>
                            <td className='border border-gray-300 p-2'>{ictc.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className='text-lg font-bold'>PPP-ICTCs</h3>
            <table className='table-auto w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2'>Sl.No</th>
                        <th className='border border-gray-300 p-2'>District</th>
                        <th className='border border-gray-300 p-2'>Name of PPP-ICTC</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { sl: 1, district: 'East Khasi Hills', name: 'Nazareth Hospital' },
                        { sl: 2, district: '', name: 'Dr. Robert Gordon Hospital (KJP)' },
                        { sl: 3, district: 'West Khasi Hills', name: 'Holy Cross Health Centre Mairang' },
                        { sl: 4, district: 'West Jaintia Hills', name: 'Dr. Norman Tunnel Hospital Jowai' },
                        { sl: 5, district: 'West Garo Hills', name: 'Tura Christian Hospital' }
                    ].map((ictc) => (
                        <tr key={ictc.sl}>
                            <td className='border border-gray-300 p-2'>{ictc.sl}</td>
                            <td className='border border-gray-300 p-2'>{ictc.district}</td>
                            <td className='border border-gray-300 p-2'>{ictc.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className='text-lg font-bold'>F-ICTCs</h3>
            <table className='table-auto w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2'>Sl.No</th>
                        <th className='border border-gray-300 p-2'>District</th>
                        <th className='border border-gray-300 p-2'>Name of F-ICTC</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { sl: 1, district: 'East Khasi Hills', name: 'Unit Hospital, 1 MLP Mawiong, Shillong' },
                        { sl: 2, district: 'East Khasi Hills', name: 'Smit PHC' },
                        { sl: 3, district: 'East Khasi Hills', name: 'Sohra CHC' },
                        { sl: 4, district: 'East Khasi Hills', name: 'Mawphlang PHC' },
                        { sl: 5, district: 'East Khasi Hills', name: 'Mawsynram CHC' },
                        { sl: 6, district: 'East Khasi Hills', name: 'Kharmalki UHC' },
                        { sl: 7, district: 'East Khasi Hills', name: 'Mawpat UHC' },
                        { sl: 8, district: 'East Khasi Hills', name: 'Pynthorbah UHC' },
                        { sl: 9, district: 'East Khasi Hills', name: 'Jaiaw UHC' },
                        { sl: 10, district: 'East Khasi Hills', name: 'Pongtung PHC' },
                        { sl: 11, district: 'East Khasi Hills', name: 'Reid Provincial Chest Hospital' },
                        { sl: 12, district: 'East Khasi Hills', name: 'Ichamati CHC' },
                        { sl: 13, district: 'East Khasi Hills', name: 'BSF Composite Hospital' },
                        { sl: 14, district: 'East Khasi Hills', name: 'Bishnupur UHC' },
                        { sl: 15, district: 'East Khasi Hills', name: 'Mawiong CHC' },
                        { sl: 16, district: 'East Khasi Hills', name: 'Pynursla CHC' },
                        { sl: 17, district: 'East Khasi Hills', name: 'Lam Jingshai Core Composite (TI-NGO)' },
                        { sl: 18, district: 'East Khasi Hills', name: 'Manbha Foundation (TI-NGO)' },
                        { sl: 19, district: 'East Khasi Hills', name: 'Voluntary Health Association of M IDU Shillong (TI-NGO)' },
                        { sl: 20, district: 'East Khasi Hills', name: 'VHAM TI-FIDU (TI-NGO)' },
                        { sl: 21, district: 'Ri Bhoi', name: 'Patharkhmah CHC' },
                        { sl: 22, district: 'Ri Bhoi', name: 'Bhoirymbong CHC' },
                        { sl: 23, district: 'Ri Bhoi', name: 'Mawhati PHC' },
                        { sl: 24, district: 'Ri Bhoi', name: 'KJP Selda Nongpoh (TI-NGO)' },
                        { sl: 25, district: 'South West Khasi Hills', name: 'Mawthawpdah PHC' },
                        { sl: 26, district: 'South West Khasi Hills', name: 'Ranikor CHC' },
                        { sl: 27, district: 'West Khasi Hills', name: 'Nongkhlaw CHC' },
                        { sl: 28, district: 'West Khasi Hills', name: 'Riangdo CHC' },
                        { sl: 29, district: 'West Khasi Hills', name: 'DTC Nongstoin' },
                        { sl: 30, district: 'West Khasi Hills', name: 'Pariong PHC' },
                        { sl: 31, district: 'West Khasi Hills', name: 'Tirot Singh Memorial Hospital' },
                        { sl: 32, district: 'West Jaintia Hills', name: 'Nartiang CHC' },
                        { sl: 33, district: 'West Jaintia Hills', name: 'Nongtalang CHC' },
                        { sl: 34, district: 'West Jaintia Hills', name: 'Laskein CHC, Jowai' },
                        { sl: 35, district: 'West Jaintia Hills', name: 'Dawki PHC' },
                        { sl: 36, district: 'West Jaintia Hills', name: 'Shangpung PHC' },
                        { sl: 37, district: 'West Jaintia Hills', name: 'DTC-Jowai' },
                        { sl: 38, district: 'West Jaintia Hills', name: 'MCSWA FSW Jowai (TI-NGO)' },
                        { sl: 39, district: 'West Jaintia Hills', name: 'MCSWA IDU Jowai (TI-NGO)' },
                        { sl: 40, district: 'East Jaintia Hills', name: 'Sutnga CHC' },
                        { sl: 41, district: 'East Jaintia Hills', name: 'MCSWA CC Khliehriat (TI-NGO)' },
                        { sl: 42, district: 'North Garo Hills', name: 'Mendipathar PHC' },
                        { sl: 43, district: 'North Garo Hills', name: 'Gabil PHC' },
                        { sl: 44, district: 'North Garo Hills', name: 'Resubelpara CHC' },
                        { sl: 45, district: 'South West Garo Hills', name: 'Mahendraganj CHC' },
                        { sl: 46, district: 'South West Garo Hills', name: 'Ampati CHC' },
                        { sl: 47, district: 'West Garo Hills', name: 'Dalu CHC' },
                        { sl: 48, district: 'West Garo Hills', name: 'DTC Tura' },
                        { sl: 49, district: 'West Garo Hills', name: 'Selsella CHC' },
                    ].map((ictc) => (
                        <tr key={ictc.sl}>
                            <td className='border border-gray-300 p-2'>{ictc.sl}</td>
                            <td className='border border-gray-300 p-2'>{ictc.district}</td>
                            <td className='border border-gray-300 p-2'>{ictc.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ICTCInformation;
