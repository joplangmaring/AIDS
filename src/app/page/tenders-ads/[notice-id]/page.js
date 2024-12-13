'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Notice = () => {

    const pathname = usePathname();
    const id = pathname.split('/')[3];

    const [notice, setNotice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNotice = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/notice/${id}`);
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const data = await res.json();
                setNotice(data.notice);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchNotice();
    }, [id]);

    const formatDescriptionText = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index} className=''>
                {line}
                <br />
            </span>
        ));
    };

    if (error) {
        return <div className='text-red-600'>Error: {error}</div>;
    }

    if (!notice) {
        return (
            <div className="flex justify-center items-center h-[20svh]">
                <div className="loader-2"></div>
            </div>
        )
    }

    return (
        <div className='py-10 md:px-10 px-5'>
            <h1 className='text-center text-2xl font-bold'>NOTICE</h1>
            {loading
                ?
                <div className="flex justify-center items-center h-[20svh]">
                    <div className="loader-2"></div>
                </div>
                :
                <div>
                    <div className='md:w-2/3 md:mx-auto'>
                        <h2 className='text-3xl text-center font-medium'>{notice.title}</h2>
                        <p className='my-10 text-xs text-right'>Dated: {new Date(notice.createdAt).toLocaleDateString()}</p>
                        {notice.description && <p className=''>{formatDescriptionText(notice.description)}</p>}
                    </div>

                    {notice.fileLink && <div className=''>
                        <div className='px-20 py-10 text-center'>
                            <a
                                href={`../../../../../temp/${notice.fileLink.split('/')[2]}`}
                                // href={`/Documents${notice.fileLink.split('/')[2]}`}
                                download={`${notice.fileLink.split('/')[2]}`}
                                className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'
                            >
                                Download
                            </a>
                        </div>
                        <div className='bg-white w-fit mx-auto'>
                            <object
                                data={`../../../../../${notice.fileLink}`}
                                width="600"
                                height="1000"
                                className='md:w-[70svw] w-80 md:h-[90svh] h-[50vh] bg-white'
                            ></object>
                        </div>
                    </div>
                    }
                </div>

            }
        </div>
    );
};

export default Notice;
