import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import UpdateIcon from '@mui/icons-material/Update';
import Image from 'next/image';
import Link from 'next/link';



const Sidebar = () => {
    return (
        <div className='bg-[#f3f3f3] min-h-screen w-[20svw] h-full py-7 px-10'>
            <div className='flex flex-row justify-between'>
                <div className='text-center cursor-pointer text-black hover:text-[#FE0300]'>
                    <CollectionsIcon className='' sx={{ "fontSize": "5rem" }} />
                    <p>Gallery</p>
                </div>
                <div className='text-center cursor-pointer text-black hover:text-[#FE0300]'>
                    <NewspaperIcon className='' sx={{ "fontSize": "5rem" }} />
                    <p>Newsletter</p>
                </div>
            </div>
            <div className='flex flex-row mt-5 justify-between'>
                <div className='text-center cursor-pointer text-black hover:text-[#FE0300]'>
                    <EventIcon className='' sx={{ "fontSize": "5rem" }} />
                    <p>Events/</p>
                    <p>Campaigns/</p>
                </div>
                <div className='text-center cursor-pointer text-black hover:text-[#FE0300]'>
                    <UpdateIcon className='' sx={{ "fontSize": "5rem" }} />
                    <p>MACS</p>
                    <p>Updates</p>
                </div>
            </div>
            <div className='mt-10 flex flex-col space-y-1'>
                <h5 className='text-xl font-bold text-[#FE0300]'>Publications</h5>
                <hr className='border-b border-black'/>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Basic Services</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Blood Safety</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Care, Support & Treatment</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Information, Education & Communication</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Sexually Transmitted Infections</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Targetted Interventions</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>HIV Scenerio in Meghalaya</Link>
            </div>
            <div className='mt-10 flex flex-col space-y-1'>
                <h5 className='text-xl font-bold text-[#FE0300]'>Services</h5>
                <hr className='border-b border-black'/>
                <Link href='/' className='text-black hover:text-[#FE0300]'>NACP I,II,III</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>NACP IV Extended</Link>
                <Link href='/' className='text-black hover:text-[#FE0300]'>Details of Services & Facilites</Link>
            </div>
        </div>
    )
}

export default Sidebar