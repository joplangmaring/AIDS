import Link from 'next/link'
import React from 'react'



const page = () => {
  return (
    <div className='px-10 py-10 space-y-5 w-full'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>Policies & Guidelines</h1>
            <hr className='w-full'/>
            <p>The spread of HIV/AIDS from the high risk groups to general population and from initial hot spots to new areas in India underlines the need for a comprehensive National AIDS Control Policy to effectively control the epidemic in the country.</p>
            <p>Among the preventive services are awareness generation, condom promotion, prevention of parent to child transmission, increasing ICTC services, promotion of voluntary blood donation and access to safe blood. The policies also have guidelines on targeted Interventions (TIs) for high risk groups like injecting drug users (IDUs), men having sex with men (MSM), female sex workers (FSWs) etc.</p>
            <p>Apart from this, policies have extensive guidelines on the management of common opportunistic infections, malignancies among adult/adolescent PLHA and operational guidelines for ART centres to standardise ART services across the country. The National Policy on Blood Banks ensures adequate supply of safe blood and blood components.</p>
            <p>For other important guidelines given under the policy <Link href='http://naco.gov.in/documents/policy-guidelines' className='text-[#8B0000]'>click here</Link></p>
    </div>
  )
}

export default page