 
'use client';

import React, { useEffect } from 'react';

const AnnualReports = () => {

    useEffect(() => {
        window.location.href = "https://www.naco.gov.in/documents/annual-reports";
    }
    , []);

    return (
        <div className='px-10 py-10 space-y-5 w-full'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>Annual Reports</h1>
            <hr />
            <p>Redirecting...</p>
        </div>
    );
};

export default AnnualReports;
