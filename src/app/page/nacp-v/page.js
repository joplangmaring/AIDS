'use client'

import React, { useEffect } from 'react'

const nacpVpage = () => {

    useEffect(() => {
        window.location.href = "https://naco.gov.in/sites/default/files/NACP_V_Strategy_Booklet.pdf";
    }, []);

    return ( 
        <div>redirecting...</div>
    )
}

export default nacpVpage;