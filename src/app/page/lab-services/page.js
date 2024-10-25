import React from 'react';

const LabServicesSection = () => {
    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>LAB SERVICES</h1>
            <hr />
            <p>There are 73 HIV testing facilities available in the state. This test is performed in the ICTC, PPTCT, Facility Integrated Counseling and Testing Centre (FICTC), PPP-ICTC, Mobile ICTC.</p>
            <p>There is 1 State Reference Laboratory (SRL) in the state which is conducting External Quality Assessment for HIV testing, located at the Department of Microbiology of NEIGRIHMS, Shillong. There are 16 Stand Alone ICTCs in the state that are doing confirmatory tests for HIV and participating in the quarterly EQAS.</p>
            <p>There is 1 CD4 Testing Laboratory located at Civil Hospital, Shillong.</p>
            <h2 className='mt-4 font-semibold'>Activities:</h2>
            <ul className='list-disc list-inside'>
                <li>Supervise and mentor the ICTC Lab Techs for quality testing.</li>
                <li>Participate in the EQAS under NACP.</li>
                <li>Undertake Proficiency Testing on the Panel Sera (panel of 8 members) provided by NRL twice a year as per the EQAS calendar and send the report of the PT panel within 1 week of receipt to the concerned NRL.</li>
                <li>Distribute the Panel Sera (panel of 8 members) provided by NRL twice a year as per the EQAS calendar to all ICTCs and Blood Banks under SRL and compile the Cumulative Report of the Panel Sera from ICTCs and Blood Banks for onward communication to the NRL.</li>
                <li>Follow up with the centers in case of no reporting from the site.</li>
                <li>Retest 20% positive and 5% negative samples received from ICTCs (of specimens received by ICTCs in the first 7 days of Jan., April, July, and Oct.). Send the report back of the inter-lab comparison within 7 days of receipt especially where discordance is noted.</li>
                <li>Confirm all Indeterminate and Discordant samples from ICTCs by referring samples to NRL.</li>
                <li>Induction/Refresher Training of ICTC Lab Technicians.</li>
            </ul>
            <h2 className='mt-4 font-semibold'>Achievements:</h2>
            <p>NABL Accreditation of SRL & ICTC NEIGRIHMS</p>
        </div>
    );
};

export default LabServicesSection;
