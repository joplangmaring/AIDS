import React from "react";

const BloodTransfusion = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold">Blood Transfusion Services: Meghalaya (2018-19)</h1>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Background</h2>
        <p className="mt-2">
          Blood is an intrinsic requirement for healthcare and proper functioning of the health system. Provision of
          safe blood is vital as it is essential for safeguarding human life.
        </p>
        <p className="mt-2">
          Blood Transfusion Services (BTS) is a vital part of healthcare. A well-organized BTS, with quality systems in
          all areas, is a prerequisite for the safe and effective use of blood and blood products through a network of
          licensed Blood Banks and Blood Storage Centres with trained personnel and infrastructure.
        </p>
        <p className="mt-2">
          The objective of BTS is to eliminate blood scarcity and ensure availability of safe and quality blood,
          round the clock and throughout the year, even in far-flung areas.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Key Strategies</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Assessing blood needs and requirements of the state.</li>
          <li>Increasing voluntary, non-remunerated blood donation to meet safe blood requirements through donor recruitment and retention.</li>
          <li>Ensuring mandatory screening for Transfusion Transmitted Infections (TTIs) like HIV1&2, Hepatitis B & C, Syphilis, and Malaria.</li>
          <li>Promoting rational and appropriate use of blood among clinicians.</li>
          <li>Building capacity of healthcare providers to achieve efficient and self-sufficient blood transfusion services.</li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Licensed Blood Banks</h2>
        <table className="w-full mt-2 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Blood Bank</th>
              <th className="border border-gray-300 px-2 py-1">Type</th>
              <th className="border border-gray-300 px-2 py-1">Sector</th>
              <th className="border border-gray-300 px-2 py-1">Remark</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Regional Blood Bank, Pasteur Institute, Shillong", "MBB with BCSU", "Government", "Supported by NACO"],
              ["2", "Blood Bank, NEIGRIHMS, Shillong", "MBB with BCSU", "Government", "Supported by NACO"],
              ["3", "Blood Bank, Tura Civil Hospital, Tura", "DLBB", "Government", "Supported by NACO"],
              ["4", "Blood Bank, Jowai Civil Hospital, Jowai", "DLBB", "Government", "Supported by NACO"],
              ["5", "Blood Bank, Nazareth Hospital, Shillong", "DLBB", "Private Charitable", "Supported by NACO"],
              ["6", "Blood Bank, Dr. H.Gordon Roberts Hospital, Shillong", "DLBB", "Private Charitable", "Supported by NACO"],
              ["7", "Blood Bank, Military Hospital, Shillong", "DLBB", "Military", "Supported by NACO"],
            ].map(([id, bank, type, sector, remark]) => (
              <tr key={id}>
                <td className="border border-gray-300 px-2 py-1">{id}</td>
                <td className="border border-gray-300 px-2 py-1">{bank}</td>
                <td className="border border-gray-300 px-2 py-1">{type}</td>
                <td className="border border-gray-300 px-2 py-1">{sector}</td>
                <td className="border border-gray-300 px-2 py-1">{remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Blood Storage Centres</h2>
        <table className="w-full mt-2 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Storage Centre</th>
              <th className="border border-gray-300 px-2 py-1">Linkage</th>
              <th className="border border-gray-300 px-2 py-1">Remark</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Tirot Sing Memorial Hospital, Mairang", "Regional Blood Bank, Pasteur Institute, Shillong", "Supported by National Health Mission, Meghalaya"],
              ["2", "Nongpoh Civil Hospital, Nongpoh", "Regional Blood Bank, Pasteur Institute, Shillong", "Supported by National Health Mission, Meghalaya"],
              ["3", "Williamnagar Civil Hospital, Williamnagar", "Blood Bank, Tura Civil Hospital, Tura", "Supported by National Health Mission, Meghalaya"],
              ["4", "Jowai Civil Hospital, Ialong", "Blood Bank, Jowai Civil Hospital, Panaliar, Jowai", "Supported by National Health Mission, Meghalaya"],
              ["5", "Bethany Hospital, Shillong", "Regional Blood Bank, Pasteur Institute, Shillong", "Private"],
              ["6", "Woodland Hospital, Shillong", "Regional Blood Bank, Pasteur Institute, Shillong", "Private"],
              ["7", "Supercare Hospital, Shillong", "Regional Blood Bank, Pasteur Institute, Shillong", "Private"],
            ].map(([id, center, linkage, remark]) => (
              <tr key={id}>
                <td className="border border-gray-300 px-2 py-1">{id}</td>
                <td className="border border-gray-300 px-2 py-1">{center}</td>
                <td className="border border-gray-300 px-2 py-1">{linkage}</td>
                <td className="border border-gray-300 px-2 py-1">{remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BloodTransfusion;
