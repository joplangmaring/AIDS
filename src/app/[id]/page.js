'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { IoLocationOutline } from "react-icons/io5";
import Navbar from '../components/navbar';

import google_map from '../../assets/google_map.png';

const PostOfficeDetail = () => {
    const id = usePathname().split('/').pop();
    const [postOffice, setPostOffice] = useState(null);
    const [ictcs, setIctcs] = useState([]);

    const [search, setSearch] = useState('');
    const [postOffices, setPostOffices] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Function to fetch post offices based on search input
    const handleSearch = async () => {
        if (!search) return;

        try {
            const response = await fetch(`/api/postoffices?search=${search}`);
            const data = await response.json();

            if (data.success) {
                setPostOffices(data.data); // Store the result in state
                setShowDropdown(true); // Show dropdown when results are available
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Failed to fetch post offices:', error);
        }
    };

    // Hide dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownRef]);

    useEffect(() => {
        const fetchPostOffice = async () => {
            if (id) {
                const response = await fetch(`/api/postoffices/${id}`);
                const data = await response.json();
                setPostOffice(data.data);
                // Fetch ICTCs based on the district of the post office
                fetchICTCs(data.data.district);
            }
        };

        fetchPostOffice();
    }, [id]);

    const fetchICTCs = async (district) => {
        const response = await fetch(`/api/ictc?district=${district}`);
        const data = await response.json();
        if (data.success) {
            setIctcs(data.data); // Set ICTCs in state
        }
    };

    useEffect(() => {
        console.log(ictcs);
    }, [ictcs]);

    if (!postOffice) return <p>Loading...</p>;

    return (
        <div
            className='pb-10 relative bg-cover bg-center min-h-[120vh]'
            style={{
                backgroundImage: `url(${google_map.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <h2 className='mt-10 mb-5 md:mx-10 mx-5 text-2xl font-bold uppercase text-white'>
                    Services near {postOffice.post_office_name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-10 px-5">
                    {ictcs.map((ictc) => (
                        <div
                            key={ictc._id}
                            className="bg-red-800 text-white border rounded-lg shadow-xl hover:scale-[95%] transition duration-500 p-4 flex flex-row items-center gap-5"
                        >
                            <div>
                                <IoLocationOutline className="text-white text-7xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl mb-5">{ictc.name_of_the_ictc}</h3>
                                <p className="text-white">
                                    Location: <b>{ictc.location}, {ictc.district}</b>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-col justify-center py-4 z-50 text-center md:w-[50vw] mx-auto mt-20">
                <div className="flex space-x-2 mb-4 items-center">
                    <div className="bg-red-600 rounded-full p-2 h-fit">
                        <IoLocationOutline className="text-white text-xl w-fit" />
                    </div>
                    <h1 className="text-white md:text-3xl text-md font-bold pl-2">
                        Find Nearest Testing Centre
                    </h1>
                </div>
                <div className="flex flex-col relative md:w-full z-50" ref={dropdownRef}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyUp={handleSearch}
                        className="p-2 rounded border border-gray-400 outline-none md:w-[100%] max-w-[100%] placeholder:text-base"
                        placeholder="Enter Address or PIN Code."
                    />

                    {/* Dropdown for post offices */}
                    {showDropdown && postOffices.length > 0 && (
                        <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-300 max-h-60 overflow-auto z-50 rounded shadow-lg">
                            {postOffices.map((office) => (
                                <li
                                    key={office._id}
                                    className="p-2 hover:bg-gray-200 cursor-pointer text-left"
                                >
                                    <Link
                                        href={`/${office._id}`}
                                        onClick={() => setShowDropdown(false)}
                                    >
                                        {office.post_office_name} - {office.pin}, {office.district}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostOfficeDetail;
