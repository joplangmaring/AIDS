import React from 'react';

const Page = () => {
    const contacts = [
        { name: "Shri Sampath Kumar, IAS", designation: "Principal Secretary, Health & Family Welfare Department", contact: "0364-2500019/ 9918000079", email: "sampath97@gmail.com" },
        { name: "Dr (Mrs) Bethabara Decruse", designation: "Project Director", contact: "8794001491", email: "decrusebeth@gmail.com" },
        { name: "Dr (Mrs) Laura Wanda Myrthong", designation: "Deputy Director (Medical)", contact: "9863097525", email: "lauramyrthong@gmail.com" },
        { name: "Smt Mary Shallyne Kharkongor", designation: "Divisional Assistant", contact: "7005480665", email: "maryshallyne2017@gmail.com" },
        { name: "Smt Mamata R C Rymmai", designation: "Deputy Director (BSD)", contact: "9774127134", email: "roymona15@gmail.com" },
        { name: "Shri Heimonmi Pohlong", designation: "Assistant Director (BSD)", contact: "6909087072", email: "pohlongheimonmi@gmail.com" },
        { name: "Smt Rachel M Nongdhar", designation: "Divisional Assistant", contact: "9378185817", email: "rachelmnongdhar@gmail.com" },
        { name: "Smt Iadaphiralang Wriah", designation: "Deputy Director (CST)", contact: "9774460137", email: "phira25wriah@gmail.com" },
        { name: "Smt Daphilahunshisha Kharlukhi", designation: "Divisional Assistant", contact: "8787353013", email: "" },
        { name: "Shri John Gordon Warjri", designation: "Assistant Director (Lab Services)", contact: "8794247682", email: "warjrijohngordon@gmail.com" },
        { name: "Shri Wilson Dohling", designation: "Deputy Director (Prevention)", contact: "9383191921", email: "w.dohling@gmail.com" },
        { name: "Dr Eleglaza Airiti Hujon", designation: "Assistant Director (Prevention)", contact: "7005841180", email: "eahujon@gmail.com" },
        { name: "Smt Phibakor Khongwir", designation: "Divisional Assistant", contact: "6009352931", email: "" },
        { name: "Shri Ajoy M Lanong", designation: "Deputy Director (Mainstreaming)", contact: "8794726267", email: "ajoylanong@gmail.com" },
        { name: "Smt Larina Nongpiur", designation: "Assistant Director (Youth Affair)", contact: "7308316176", email: "larynenongpiur@gmail.com" },
        { name: "Shri Rapborlang Ranee", designation: "Assistant Director (IEC)", contact: "9366614094", email: "rapborlangranee2@gmail.com" },
        { name: "Smt Daphisha G Pyngrope", designation: "Assistant Director (Documentation)", contact: "9856549076", email: "daphishap@gmail.com" },
        { name: "Shri Zion Marwein", designation: "Assistant Director (CSS/GIPA)", contact: "9362066072", email: "marweinzion@gmail.com" },
        { name: "Smt Nickie Karla Pakyntein", designation: "Divisional Assistant", contact: "8794707424", email: "nickiepakyntein@gmail.com" },
        { name: "Shri Ramesh Prasad", designation: "Divisional Assistant", contact: "9862745783", email: "rameshprasad308@gmail.com" },
        { name: "Smt Safeeda G Warjri", designation: "Deputy Director (SI)", contact: "9856999498", email: "" },
        { name: "Shri Herman Nadon", designation: "Assistant Director (SI)", contact: "9886537163", email: "hermannadon01@gmail.com" },
        { name: "Shri Lummiki Kyndiah", designation: "Divisional Assistant", contact: "9863659751", email: "" },
        { name: "Shri Glen T Pyrtuh", designation: "Store Officer", contact: "8974006058", email: "gpyrtuh@gmail.com" },
        { name: "Shri Chanlangki Khonglamet", designation: "Procurement Assistant", contact: "9774182875", email: "chanlangkik@gmail.com" },
        { name: "Shri Kitkupar Shabong", designation: "Divisional Assistant", contact: "9089747228", email: "kitshabongkpr12@gmail.com" },
        { name: "Shri Richard Kitboklang Khongjoh", designation: "Divisional Assistant", contact: "9774151747", email: "richardkitboklangkhongjoh@gmail.com" },
        { name: "Smt Emelie Wahlang", designation: "Deputy Director (Finance)", contact: "9436704353", email: "" },
        { name: "Smt Wallamtihun Hujon", designation: "Accountant", contact: "9856100473", email: "wallamtihunhujon@gmail.com" },
        { name: "Shri Wanlambok Swett", designation: "Finance Assistant", contact: "9366095350", email: "wanlamswett@gmail.com" },
        { name: "Shri Richard Sun", designation: "Finance Assistant", contact: "7085850816", email: "richardsun.1994.27@gmail.com" },
        { name: "Smt Maria Goretti Swer", designation: "Administrative Officer", contact: "9856137064", email: "mgswer@gmail.com" },
        { name: "Smt Marylyne Nongbsap", designation: "Divisional Assistant", contact: "9862241743", email: "marylyne.nongbsap4@gmail.com" },
        { name: "Smt Etheldalyne Ryntathiang", designation: "Divisional Assistant", contact: "8787551160", email: "ethelrynth@gmail.com" },
        { name: "Shri Twinkle Kharjana", designation: "Messenger", contact: "9612086094", email: "" },
        { name: "Shri Pynkmenlang Kharpuri", designation: "Driver", contact: "", email: "" },
    ];

    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>Who’s Who</h1>
            <hr />
            <h2 className='text-2xl font-semibold mt-5'>MEGHALAYA AIDS CONTROL SOCIETY KEY CONTACTS</h2>
            <table className='min-w-full border-collapse border border-gray-300 mt-5'>
                <thead>
                    <tr className='bg-[#8B0000] text-white'>
                        <th className='border border-gray-300 px-4 py-2'>Name</th>
                        <th className='border border-gray-300 px-4 py-2'>Designation</th>
                        <th className='border border-gray-300 px-4 py-2'>Contact No.</th>
                        <th className='border border-gray-300 px-4 py-2'>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className='border border-gray-300 px-4 py-2'>{contact.name}</td>
                            {contact.designation && <td className='border border-gray-300 px-4 py-2'>{contact.designation}</td>}
                            {contact.designation && <td className='border border-gray-300 px-4 py-2'>{contact.contact}</td>}
                            {contact.designation && <td className='border border-gray-300 px-4 py-2'>{contact.email}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className='text-xl font-semibold mt-10'>Office Address:</h2>
            <p>OFFICE OF THE PROJECT DIRECTOR</p>
            <p>MEGHALAYA AIDS CONTROL SOCIETY</p>
            <p>Pasteur Hills, Shillong- 793001</p>
            <p>Email ID: meghalayasacs@gmail.com</p>
        </div>
    );
};

export default Page;
