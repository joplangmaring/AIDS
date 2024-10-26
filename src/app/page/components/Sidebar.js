import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import UpdateIcon from '@mui/icons-material/Update';
import Image from 'next/image';
import Link from 'next/link';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



const Sidebar = () => {
    return (
        <div>
            <div className='bg-[#f3f3f3] min-h-screen md:w-[20svw] h-full py-7 px-10 md:block hidden'>
                <div className='flex flex-row md:justify-between justify-evenly'>
                    <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                        <CollectionsIcon className='' sx={{ "fontSize": "5rem" }} />
                        <p>Gallery</p>
                    </div>
                    <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                        <NewspaperIcon className='' sx={{ "fontSize": "5rem" }} />
                        <p>Newsletter</p>
                    </div>
                </div>
                <div className='flex flex-row mt-5 md:justify-between justify-evenly'>
                    <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                        <EventIcon className='' sx={{ "fontSize": "5rem" }} />
                        <p>Events/</p>
                        <p>Campaigns/</p>
                    </div>
                    <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                        <UpdateIcon className='' sx={{ "fontSize": "5rem" }} />
                        <p>MACS</p>
                        <p>Updates</p>
                    </div>
                </div>
                <div className='mt-10 flex flex-col space-y-1'>
                    <h5 className='text-xl font-bold text-[#FE0300]'>Publications</h5>
                    <hr className='border-b border-black' />
                    <Link href='/page/basic-services' className='text-black hover:text-[#8B0000]'>Basic Services</Link>
                    <Link href='/page/blood-safety' className='text-black hover:text-[#8B0000]'>Blood Safety</Link>
                    <Link href='/page/care-support-and-treatment' className='text-black hover:text-[#8B0000]'>Care, Support & Treatment</Link>
                    <Link href='/page/ictc-in-the-state' className='text-black hover:text-[#8B0000]'>Information, Education & Communication</Link>
                    <Link href='/page/sti' className='text-black hover:text-[#8B0000]'>Sexually Transmitted Infections</Link>
                    <Link href='/' className='text-black hover:text-[#8B0000]'>Targetted Interventions</Link>
                    <Link href='/page/status' className='text-black hover:text-[#8B0000]'>HIV Scenerio in Meghalaya</Link>
                </div>
                <div className='mt-10 flex flex-col space-y-1'>
                    <h5 className='text-xl font-bold text-[#FE0300]'>Services</h5>
                    <hr className='border-b border-black' />
                    <Link href='/' className='text-black hover:text-[#8B0000]'>NACP I,II,III</Link>
                    <Link href='/' className='text-black hover:text-[#8B0000]'>NACP IV Extended</Link>
                    <Link href='/' className='text-black hover:text-[#8B0000]'>Details of Services & Facilites</Link>
                </div>
            </div>

            <div className='md:hidden block'>
                <Accordion className='bg-white border-r-0 shadow-none border-b'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Menu
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='bg-[#f3f3f3] min-h-screen md:w-[20svw] h-full py-7 px-10 '>
                            <div className='flex flex-row md:justify-between justify-evenly'>
                                <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                                    <CollectionsIcon className='' sx={{ "fontSize": "5rem" }} />
                                    <p>Gallery</p>
                                </div>
                                <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                                    <NewspaperIcon className='' sx={{ "fontSize": "5rem" }} />
                                    <p>Newsletter</p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-5 md:justify-between justify-evenly'>
                                <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                                    <EventIcon className='' sx={{ "fontSize": "5rem" }} />
                                    <p>Events/</p>
                                    <p>Campaigns/</p>
                                </div>
                                <div className='text-center cursor-pointer text-black hover:text-[#8B0000]'>
                                    <UpdateIcon className='' sx={{ "fontSize": "5rem" }} />
                                    <p>MACS</p>
                                    <p>Updates</p>
                                </div>
                            </div>
                            <div className='mt-10 flex flex-col space-y-1'>
                                <h5 className='text-xl font-bold text-[#FE0300]'>Publications</h5>
                                <hr className='border-b border-black' />
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Basic Services</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Blood Safety</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Care, Support & Treatment</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Information, Education & Communication</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Sexually Transmitted Infections</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Targetted Interventions</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>HIV Scenerio in Meghalaya</Link>
                            </div>
                            <div className='mt-10 flex flex-col space-y-1'>
                                <h5 className='text-xl font-bold text-[#FE0300]'>Services</h5>
                                <hr className='border-b border-black' />
                                <Link href='/' className='text-black hover:text-[#8B0000]'>NACP I,II,III</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>NACP IV Extended</Link>
                                <Link href='/' className='text-black hover:text-[#8B0000]'>Details of Services & Facilites</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar