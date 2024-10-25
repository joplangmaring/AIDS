import React from 'react';

const CurrentStatusTable = () => {
    return (
        <div className='px-10 py-10'>
            <strong className='text-xl'>CURRENT STATUS IN THE STATE</strong>
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
        </div>
    );
};

export default CurrentStatusTable;
