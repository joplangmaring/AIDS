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
            <h1 className='text-4xl font-bold text-[#8B0000]'>CARE, SUPPORT & TREATMENT</h1>
            <h2 className='text-2xl font-semibold'>CARE SUPPORT AND TREATMENT (CST)</h2>
            <p>
                The overall goal of CST component is to provide universal access to comprehensive, equitable, stigma-free, quality care, support and treatment services to all PLHIVs in the country using an integrated approach. With the adoption of the 90:90:90 targets ie 90% of PLHIV should know their status, 90% to be on treatment and 90% to be virally suppressed, the National AIDS Control Organization has implemented the landmark step of “Treat All”- strategy which focuses on initiation of ART for all PLHIVs. All persons diagnosed with HIV infection are eligible for ART initiation regardless of CD4 count or WHO Clinical Staging, Any age (Adult-Adolescent-Children) or any population (HRG/ANC/ Migrant/etc).
            </p>
            <h3 className='text-xl font-semibold'>AIMS:</h3>
            <p>To provide comprehensive services to People Living with HIV (PLHIV) with respect to</p>
            <ul className='list-disc pl-5'>
                <li>Free Anti-Retroviral Therapy (ART)</li>
                <li>Psychosocial support</li>
                <li>Prevention and treatment of Opportunistic Infections (OI) including tuberculosis</li>
                <li>Facilitating home-based care</li>
                <li>Positive prevention and impact mitigation</li>
            </ul>
            <h3 className='text-xl font-semibold'>SERVICE DELIVERY MECHANISM FOR CARE, SUPPORT & TREATMENT:</h3>
            <p>
                CST services are provided through dedicated ART centres established in health facilities. These are linked to Centres of Excellence (CoE) and ART Plus Centres. The services have been decentralised through Link ART Centres (LAC). ART centres are also linked to ICTCs, STI clinics, PPTCT services and other clinical departments in the institutions. They are also linked with the Revised National Tuberculosis Control Programme (RNTCP), in order to ensure proper management of TB-HIV co-infected patients.
            </p>
            <h4 className='text-lg font-semibold'>Anti-Retroviral Therapy Centres:</h4>
            <p>Provision of free Anti-Retroviral Therapy (ART) for all persons living with HIV/AIDS.</p>
            <h4 className='text-lg font-semibold'>Link ART Centres:</h4>
            <p>
                In order to facilitate the delivery of ART services closer to the beneficiaries, Link ART Centres (LAC) was set up mainly at ICTCs in the district/sub-district level hospitals and linked to a Nodal ART centre within accessible distance. The LACs help in reducing cost of travel; time spent at the centre and hence helps in improving clients’ adherence to ART.
            </p>
            <h4 className='text-lg font-semibold'>ART Plus Centres:</h4>
            <p>
                In order to provide easy access to second-line ART, NACO expanded the number of centres that provide second-line ART by upgrading some of the ART centres as ART Plus.
            </p>
            <h4 className='text-lg font-semibold'>Care and Support Centres (CSC):</h4>
            <p>Goal:</p>
            <p>
                To improve survival and quality of life of PLHIV. Care and Support Centres provide expanded and holistic care & support services for PLHIV. They provide linkages and access to essential services, support treatment adherence, reduce stigma and discrimination, and improve the quality of life of PLHIV.
            </p>
            <h3 className='text-xl font-semibold'>SERVICES PROVIDED:</h3>
            <ul className='list-disc pl-5'>
                <li>
                    First-line ART: First-line ART is provided free of cost to all PLHIV through ART centres. Positive cases referred by ICTCs are registered in ART centres for pre-ART and ART services. The assessment for ART is done through clinical examination and CD4 count. Patients are also provided Counseling on treatment adherence, nutrition, positive prevention and positive living. Follow up of patients on ART is done by assessing drug adherence, regularity of visits, periodic examination and CD4 count (every six months). Treatment for Opportunistic Infections is also provided through ART centres.
                </li>
                <li>
                    Alternative first-line ART: It has been observed that a small number of patients initiated on first-line ART experience acute/chronic toxicity/intolerance to first-line ARV drugs, thus necessitating change of ARV drugs to alternative first-line drugs.
                </li>
                <li>
                    Second-line ART: The patients started on ART can continue on first-line ART for a number of years if their adherence is good. However, over the years some percentage of PLHIV on first-line ART develops resistance to these drugs due to mutations in the virus. For the evaluation of patients for initiation on second line and alternate first-line ART, a State AIDS Clinical Expert Panel (SACEP) has been constituted.
                </li>
            </ul>
            <h3 className='text-xl font-semibold'>CURRENT STATUS IN THE STATE</h3>
            <table className='w-full border-collapse mt-5'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'></th>
                        <th className='border px-4 py-2'></th>
                        <th className='border px-4 py-2 font-bold'>ADULTS</th>
                        <th className='border px-4 py-2 font-bold'>CHILDREN</th>
                        <th className='border px-4 py-2 font-bold'>TOTAL</th>
                    </tr>
                    <tr>
                        <th className='border px-4 py-2 font-bold'>Sl. No</th>
                        <th className='border px-4 py-2 font-bold'>Indicator</th>
                        <th className='border px-4 py-2 font-bold'>M</th>
                        <th className='border px-4 py-2 font-bold'>F</th>
                        <th className='border px-4 py-2 font-bold'>TG</th>
                        <th className='border px-4 py-2 font-bold'>M</th>
                        <th className='border px-4 py-2 font-bold'>F</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border px-4 py-2'>1</td>
                        <td className='border px-4 py-2'>No. of PLHIV Registered till July 2018</td>
                        <td className='border px-4 py-2'>1686</td>
                        <td className='border px-4 py-2'>1701</td>
                        <td className='border px-4 py-2'>2</td>
                        <td className='border px-4 py-2'>79</td>
                        <td className='border px-4 py-2'>92</td>
                        <td className='border px-4 py-2 font-bold'>3560</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>2</td>
                        <td className='border px-4 py-2'>No. of PLHIV Currently Alive and on first line ART</td>
                        <td className='border px-4 py-2'>861</td>
                        <td className='border px-4 py-2'>1032</td>
                        <td className='border px-4 py-2'>1</td>
                        <td className='border px-4 py-2'>46</td>
                        <td className='border px-4 py-2'>68</td>
                        <td className='border px-4 py-2 font-bold'>2008</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>3</td>
                        <td className='border px-4 py-2'>No. of PLHIV Currently Alive and on Second line ART</td>
                        <td className='border px-4 py-2'>8</td>
                        <td className='border px-4 py-2'>11</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>2</td>
                        <td className='border px-4 py-2 font-bold'>21</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>4</td>
                        <td className='border px-4 py-2'>No. of LFUs (Pre-ART after 1st Jan 2011)</td>
                        <td className='border px-4 py-2'>179</td>
                        <td className='border px-4 py-2'>199</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>7</td>
                        <td className='border px-4 py-2'>4</td>
                        <td className='border px-4 py-2 font-bold'>389</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>5</td>
                        <td className='border px-4 py-2'>No. of LFUs (On ART)</td>
                        <td className='border px-4 py-2'>224</td>
                        <td className='border px-4 py-2'>193</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>8</td>
                        <td className='border px-4 py-2'>6</td>
                        <td className='border px-4 py-2 font-bold'>431</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>6</td>
                        <td className='border px-4 py-2'>No. of deaths reported (Pre-ART)</td>
                        <td className='border px-4 py-2'>116</td>
                        <td className='border px-4 py-2'>66</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>3</td>
                        <td className='border px-4 py-2'>2</td>
                        <td className='border px-4 py-2 font-bold'>187</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>7</td>
                        <td className='border px-4 py-2'>No. of deaths reported (On ART)</td>
                        <td className='border px-4 py-2'>193</td>
                        <td className='border px-4 py-2'>121</td>
                        <td className='border px-4 py-2'>0</td>
                        <td className='border px-4 py-2'>11</td>
                        <td className='border px-4 py-2'>5</td>
                        <td className='border px-4 py-2 font-bold'>330</td>
                    </tr>
                </tbody>
            </table>
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
