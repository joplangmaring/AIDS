import React from 'react';

const NacpII = () => {
    return (
        <div className='px-10 py-10 space-y-5'>
            <h1 className='text-4xl font-bold text-[#8B0000]'>Targeted Interventions</h1>
            <hr />
            <p>
            Targeted Intervention (TI) projects are intervention projects for High Risk Groups (HRGs). Meghalaya was among the few states in India which started targeted intervention programme at a later stage. For effective implementation of the Targeted Intervention (TI) projects, MACS has taken the help of local NGOs to help them with the implementation of 9 (nine) targeted intervention (TI) projects all over the state.</p>
            <p>In East Khasi Hills, 4 projects are being implemented in Shillong, of which one is being taken up by Manbha Foundation targeting a population of 400 Injecting Drug Users (IDUs), another by Voluntary Health Association of Meghalaya (VHAM) covering a population of 200 IDUs + 200 Oral Substitute Therapy (OST). In addition, Voluntary Health Association of Meghalaya (VHAM) is also implementing a Female IDU (FIDU) project covering a target population of 150 FIDUs + 50 OST. Manbha Foundation is also handling a Core Composite project covering 400 Female Sex Workers (FSW) and 200 Men having sex with Men (MSM).</p>
            <p>There is one project in Nangalbibra, South Garo Hills which is being implemented by Adil Gandhian Society covering a target population of 300 FSW.</p>
            <p>In Jaintia Hills, 3 projects are being implemented. One IDU+OST project is implemented by  Mihmyntdu Community Social Welfare Association (MCSWA) in Jowai, covering a target population of 250 IDU + 200 OST. The same NGO, MCSWA is covering a target population of 300 FSW in Jowai. Also, MCSWA is implementing a Core Composite project at Khliehriat, East Jaintia Hills District covering a target population of 150 IDU + 50 FSW.</p>
            <p>In Ri Bhoi, the project was given to KJPA SELDA covering a target population of 300 FSW.</p>
            <p>Besides, there are 2 (two)OST centres in Government run facilities, one located in Civil Hospital, Shillong and the other in Khliehriat CHC.</p>
            <table className="min-w-full border border-gray-200">
                <thead className="bg-[#8B0000] text-white">
                    <tr>
                        <th className="py-2 border border-gray-300"><strong>Sl. No.</strong></th>
                        <th className="py-2 border border-gray-300"><strong>Name of NGO & Area of Implementation</strong></th>
                        <th className="py-2 border border-gray-300"><strong>District</strong></th>
                        <th className="py-2 border border-gray-300"><strong>TYPOLOGY</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 border border-gray-300">1</td>
                        <td className="py-2 border border-gray-300">MANBHA FOUNDATION, SHILLONG</td>
                        <td className="py-2 border border-gray-300">EAST KHASI HILLS</td>
                        <td className="py-2 border border-gray-300">CORE COMPOSITE (FSW & MSM)</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">2</td>
                        <td className="py-2 border border-gray-300">IDU</td>
                        <td className="py-2 border border-gray-300"></td>
                        <td className="py-2 border border-gray-300"></td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">3</td>
                        <td className="py-2 border border-gray-300">VOLUNTARY HEALTH ASSOCIATION OF MEGHALAYA (VHAM), SHILLONG</td>
                        <td className="py-2 border border-gray-300">EAST KHASI HILLS</td>
                        <td className="py-2 border border-gray-300">IDU & OST</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">4</td>
                        <td className="py-2 border border-gray-300">MIH MYNTDU COMMUNITY SOCIAL WELFARE ASSOCIATION, JOWAI & LAD RYMBAI</td>
                        <td className="py-2 border border-gray-300">WEST JAINTIA HILLS</td>
                        <td className="py-2 border border-gray-300">FSW</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">5</td>
                        <td className="py-2 border border-gray-300">MIH MYNTDU COMMUNITY SOCIAL WELFARE ASSOCIATION (MCSWA), JOWAI</td>
                        <td className="py-2 border border-gray-300">WEST JAINTIA HILLS</td>
                        <td className="py-2 border border-gray-300">IDU & OST</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">6</td>
                        <td className="py-2 border border-gray-300">KHASI JAINTIA PRESBYTERIAN ASSEMBLY-SELDA, NONGPOH</td>
                        <td className="py-2 border border-gray-300">RI BHOI</td>
                        <td className="py-2 border border-gray-300">FSW</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">7</td>
                        <td className="py-2 border border-gray-300">ADIL GANDHIAN SOCIETY, NANGALBIBRA</td>
                        <td className="py-2 border border-gray-300">SOUTH GARO HILLS</td>
                        <td className="py-2 border border-gray-300">FSW</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">8</td>
                        <td className="py-2 border border-gray-300">VOLUNTARY HEALTH ASSOCIATION OF MEGHALAYA (VHAM), SHILLONG</td>
                        <td className="py-2 border border-gray-300">EAST KHASI HILLS</td>
                        <td className="py-2 border border-gray-300">FIDU</td>
                    </tr>
                    <tr>
                        <td className="py-2 border border-gray-300">9</td>
                        <td className="py-2 border border-gray-300">MIH MYNTDU COMMUNITY SOCIAL WELFARE ASSOCIATION (MCSWA), Khliehriat</td>
                        <td className="py-2 border border-gray-300">EAST JAINTIA HILLS</td>
                        <td className="py-2 border border-gray-300">CORE COMPOSITE (IDU & FSW)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NacpII;
