// import React from 'react';
// import INTEGRATED_HEALTH_CAMPAIGN1_1 from '../../../../public/Documents/pdf/INTEGRATED-HEALTH-CAMPAIGN1-1.pdf'
// import Link from 'next/link';


// const IntegratedHealthCampaign = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">EVENT!!!!</h1>
//       <h2 className="text-xl font-semibold mb-2">
//         Integrated Health Campaign Organized by Meghalaya AIDS Control Society In collaboration
//       </h2>
//       <p className="mb-2">
//         With the District Administration, District Medical Health Office & Other Line Departments at East Jaintia Hills District
//       </p>
//       <p className="mb-4">
//         From the 2nd June 2023 till the 29th Aug 2023
//       </p>
//       <p className="mb-2">
//         No of Camps: <strong>63</strong>
//       </p>
//       <p className="mb-2">
//         No. of Villages: <strong>198</strong>
//       </p>

//       <table className="has-background mb-4" style={{ backgroundColor: '#ff6a00a3', width: '100%', borderCollapse: 'collapse' }}>
//         <tbody>
//           <tr>
//             <td className="p-2 text-white text-center font-bold">
//               Schedule for Integrated Health Campaign East Jaintia Hills June- August, 2023
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <table class="has-background" style={{"backgroundColor":"#ff940063"}}><tbody><tr><td><strong>Sl. No</strong></td><td><strong>Date &amp; Time</strong></td><td><strong>Camp Site/Location</strong></td><td><strong>No of Villages</strong></td><td><strong>Name Of Villages to be Included</strong></td></tr><tr><td>1</td><td rowspan="2"><strong>6/2/2023</strong></td><td>Launching of the Campaign at Khliehriat West C/Hall</td><td><strong>2</strong></td><td>Khliehriat West, Khliehriat East</td></tr><tr><td>2</td><td>Sutnga CHC</td><td><strong>8</strong></td><td>Sutnga Dongiew, Sutnga Pohshnong, Wailong, Syrpoo, Moopala, Mookympat, Umlawang, 4 Kilo</td></tr><tr><td>3</td><td rowspan="2"><strong>6/6/2023</strong></td><td>Sohkymphor C/Hall</td><td><strong>5</strong></td><td>Rashai, Iurim Khliehshnong, Sohkymphor Mission, Sohkymphor Dong Nein, Sohkymphor Pohshnong</td></tr><tr><td>4</td><td>Tuituk LP School</td><td><strong>2</strong></td><td>Situng, Tuituk</td></tr><tr><td>5</td><td rowspan="2"><strong>6/8/2023</strong></td><td>Umsatai LP Sch.</td><td><strong>6</strong></td><td>Bataw, Umlangska, Pynurkba, Umsatai, Diengsatlang,Lad Wah Wapung</td></tr><tr><td>6</td><td>Tlangmoi&nbsp; C/ Hall</td><td><strong>5</strong></td><td>Muallian, Thlangmoi, Jongria, Khoingoi, Mualcheng</td></tr><tr><td>7</td><td rowspan="2"><strong>6/9/2023</strong></td><td>Mynkre C/Hall</td><td><strong>3</strong></td><td>Mynkre, Nongsning,Umrasong</td></tr><tr><td>8</td><td>Umkiang PHC/ Comm.Hall</td><td><strong>9</strong></td><td>Umkiang East, Umkiang West, Lum Phyllut,Apha, Kharkatia, Lumsohski, Dona Bhoi, Wahkoh,Pahar Umkiang</td></tr><tr><td>9</td><td rowspan="2"><strong>6/13/2023</strong></td><td>RC LP School</td><td><strong>2</strong></td><td>Khannar, Mooknor</td></tr><tr><td>10</td><td>Datsimpein C/Hall</td><td><strong>4</strong></td><td>Lad Rymbai, Dongwah, Lad Rymbai B, Datsimpien, Khlihedupon</td></tr><tr><td>11</td><td rowspan="2"><strong>6/15/2023</strong></td><td>Iongkaluh C/Hall</td><td><strong>1</strong></td><td>Iongkaluh</td></tr><tr><td>12</td><td>Pala SC</td><td><strong>3</strong></td><td>Pala, Kseh, Lyrket</td></tr><tr><td>13</td><td rowspan="2"><strong>6/16/2023</strong></td><td>Chiehruphi C/ hall</td><td><strong>4</strong></td><td>Chiehruphi, Musiang Lamare Old and New, Umrasiang, Umlong</td></tr><tr><td>14</td><td>Lumshkein C/Hall</td><td><strong>7</strong></td><td>Iapmala, Lumshken, Wahsarang, Lummulieh, Lum Jarain, Suchen rim, Suchen dhana</td></tr><tr><td>15</td><td rowspan="2"><strong>6/20/2023</strong></td><td>Ummat SC</td><td><strong>3</strong></td><td>Ummat, Umlatdoh, Lad lakadong</td></tr><tr><td>16</td><td>Sibual C/Hall</td><td><strong>2</strong></td><td>Saibual, Jongria Saphak</td></tr><tr><td>17</td><td rowspan="2"><strong>6/22/2023</strong></td><td>Byrwai C/Hall</td><td><strong>1</strong></td><td>Byrwai</td></tr><tr><td>18</td><td>Umkyrpong Madan Phlang SSA</td><td><strong>3</strong></td><td>Umkyrpong, Lakasein, Mooriap</td></tr><tr><td>19</td><td rowspan="2"><strong>6/23/2023</strong></td><td>Lumshnong PHC</td><td><strong>3</strong></td><td>Lumshnong, Thangskai, Wahiajer</td></tr><tr><td>20</td><td>Mualsei U.P school</td><td><strong>1</strong></td><td>Maulsei</td></tr><tr><td>21</td><td><strong>6/26/2023</strong></td><td>Saphak UP School</td><td><strong>1</strong></td><td>Saphak</td></tr><tr><td>22</td><td rowspan="2"><strong>6/29/2023</strong></td><td>Ratacherra C/Hall</td><td><strong>4</strong></td><td>Ratacherra, Malidor, Ampyrdit, Saitual</td></tr><tr><td>23</td><td>Lelad C/Hall</td><td><strong>3</strong></td><td>Lelad, Tangnub, Tongseng</td></tr><tr><td>24</td><td><strong>6/30/2023</strong></td><td>Brichyrnot C/Hall</td><td><strong>1</strong></td><td>Brichyrnot</td></tr><tr><td>25</td><td rowspan="2"><strong>7/4/2023</strong></td><td>LP School Tuidam</td><td><strong>1</strong></td><td>Tuidam</td></tr><tr><td>26</td><td>Rymbai Pres. School</td><td><strong>3</strong></td><td>Rymbai, Umshong, Deinshalalu</td></tr><tr><td>27</td><td><strong>7/6/2023</strong></td><td>&nbsp;Jalaphet Bri Sumer @ 7 Kilo C/Hall</td><td><strong>8</strong></td><td>Lumlakba, chor chor, Moopat, Myntriang, 7 kilo, Kyrluh, Ladnarwan, Urchuni,</td></tr><tr><td>28</td><td rowspan="2"><strong>7/7/2023</strong></td><td>DonaSkurC/Hall</td><td><strong>2</strong></td><td>Dona Skur, Dona Umbluh</td></tr><tr><td>29</td><td>Cham Cham</td><td><strong>2</strong></td><td>Lumchyrmit, Cham Cham</td></tr><tr><td>30</td><td rowspan="2"><strong>7/11/2023</strong></td><td>LP School Thlangpui</td><td><strong>3</strong></td><td>Thlangpui, Kulpui, Saron, New Thlangmoi</td></tr><tr><td>31</td><td>Lama LP School</td><td><strong>2</strong></td><td>Lama, Borghat</td></tr><tr><td>32</td><td rowspan="2"><strong>7/13/2023</strong></td><td>Mukhaialong C/Hall</td><td><strong>3</strong></td><td>Mutong, Pynthorsale, Mukha Ialong</td></tr><tr><td>33</td><td>Jalaphet Bri Sutnga C/Hall</td><td><strong>4</strong></td><td>Lumsachram, Mushut, Pyrdung, Tyrki</td></tr><tr><td>34</td><td><strong>7/14/2023</strong></td><td>Sonapur C/Hall</td><td><strong>7</strong></td><td>Sunapur, Tongseng, Umstain, Lumtongseng, Lummyrli, Shymplong, Sakhri</td></tr><tr><td>35</td><td rowspan="2"><strong>7/18/2023</strong></td><td>Byndihati C/Hall</td><td><strong>4</strong></td><td>Byndihati, Umtyra, Larseng, Nongrim Hills</td></tr><tr><td>36</td><td>LP School Thuruk</td><td><strong>3</strong></td><td>Thuruk, Mulhoi, Lungmaicham</td></tr><tr><td>37</td><td rowspan="2"><strong>7/20/2023</strong></td><td>Jalyiah C/Hall</td><td><strong>3</strong></td><td>Mookhep, Jalyah, Khliehmyntriang</td></tr><tr><td>38</td><td>Kremmyrsiang Govt. School</td><td><strong>5</strong></td><td>Samasi, Mynthning, Chyrwang, Krem myrsiang, Mynthlu</td></tr><tr><td>39</td><td><strong>7/21/2023</strong></td><td>Kuliang C/Hall/ SC</td><td><strong>3</strong></td><td>Pyrtakuna, Kuliang, Borsora</td></tr><tr><td>40</td><td rowspan="2"><strong>7/25/2023</strong></td><td>Moolamnoh C/Hall</td><td><strong>4</strong></td><td>Moolamanoh, Mulang, Musniang, Musniang Rim</td></tr><tr><td>41</td><td>Dienshynrum AWC</td><td><strong>1</strong></td><td>Dienshynrum</td></tr><tr><td>42</td><td><strong>7/27/2023</strong></td><td>Narwan Loompyrdi C/Hall</td><td><strong>5</strong></td><td>Narwan Nein, Tympiahkasu, Lumpyrdi, Thwaisalong, sahkai</td></tr><tr><td>43</td><td><strong>8/3/2023</strong></td><td>Jarain C/Hall</td><td><strong>3</strong></td><td>Sakhain, Sakhain Moolimen, Jarain</td></tr><tr><td>44</td><td><strong>8/4/2023</strong></td><td>Khadum SC</td><td><strong>3</strong></td><td>Khaddum, Sialkan, Sakwa</td></tr><tr><td>45</td><td><strong>8/7/2023</strong></td><td>Rngad C/Hall</td><td><strong>3</strong></td><td>Rangad, Lumputhoi, Moonongtdu</td></tr><tr><td>46</td><td rowspan="2"><strong>8/8/2023</strong></td><td>Shnongrim C/Hall</td><td><strong>3</strong></td><td>Shnongrim, Khaidong, Lumbangla</td></tr><tr><td>47</td><td>Dkhiah C/Hall</td><td><strong>1</strong></td><td>Dkhiah East Lad Sutnga</td></tr><tr><td>48</td><td rowspan="2"><strong>8/10/2023</strong></td><td>Mukhain C/Hall</td><td><strong>3</strong></td><td>Mulait Brisutnga, Mulait Brisumer, Mookhain</td></tr><tr><td>49</td><td>Lahalein C/Hall</td><td><strong>3</strong></td><td>Leijri, Lahalein, Baskuna</td></tr><tr><td>50</td><td rowspan="2"><strong>8/11/2023</strong></td><td>Star Cement</td><td><strong>1</strong></td><td>Star Cement</td></tr><tr><td>51</td><td>Tuber Kmai shnong C/Hall</td><td><strong>2</strong></td><td>Tuber Kmaishnong, Tuber Shohshrieh</td></tr><tr><td>52</td><td rowspan="2"><strong>8/17/2023</strong></td><td>Lamyrsiang ICDS</td><td><strong>5</strong></td><td>Moolamylliang, Latyrke, Tluh, Lamyrsiang, Cement</td></tr><tr><td>53</td><td>Natbor C/Hall</td><td><strong>4</strong></td><td>Nathbor, Demlakang, Pdein Wah Khynriem, Kwator</td></tr><tr><td>54</td><td rowspan="2"><strong>8/18/2023</strong></td><td>Topcem</td><td><strong>1</strong></td><td>Topcem</td></tr><tr><td>55</td><td>Moolasngi C/Hall</td><td><strong>5</strong></td><td>Moolasngi, Shnongthymme, Lumthari, Lumchryngan,</td></tr><tr><td>56</td><td><strong>8/22/2023</strong></td><td>LP School Bamkhongsngi</td><td><strong>3</strong></td><td>Bamkhosngi, Daistong, Fiangpui</td></tr><tr><td>57</td><td rowspan="2"><strong>8/24/2023</strong></td><td>Pamra Paithlu PHC</td><td><strong>4</strong></td><td>Pamrakmai, Pamra Paithlu, Wapung skur, Wapung chnong</td></tr><tr><td>58</td><td>Huroi SC</td><td><strong>2</strong></td><td>Huroi, Hingaria</td></tr><tr><td>59</td><td><strong>8/25/2023</strong></td><td>Dalmia Cement</td><td><strong>1</strong></td><td>Dalmia Cement</td></tr><tr><td>60</td><td><strong>8/26/2023</strong></td><td>Saipung C/Hall</td><td><strong>3</strong></td><td>Saipung, Lura, Ngaibang</td></tr><tr><td>61</td><td rowspan="2"><strong>8/28/2023</strong></td><td>Khliehriat East C/Hall</td><td><strong>2</strong></td><td>Khliehriat East, Khliehriat West</td></tr><tr><td>62</td><td>Kairang C/Hall</td><td><strong>2</strong></td><td>Kairang, Nongthymme</td></tr><tr><td>63</td><td><strong>8/29/2023</strong></td><td>Dkhiah SC</td><td><strong>2</strong></td><td>Dkhiah West &amp; Moowakhu</td></tr></tbody></table>

//       <table className="has-background mb-4" style={{ backgroundColor: '#ff6a00a3', width: '100%', borderCollapse: 'collapse' }}>
//         <tbody>
//           <tr>
//             <td className="p-2 text-white text-center font-bold">
//               Free Services to be Provided under Integrated Health Campaign
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <table class="has-background" style={{"backgroundColor":"#ff6a007a"}}><tbody><tr><td><strong>Sl. No.</strong></td><td colspan="14"><strong>Free Services to be Provided under Integrated Health Campaign</strong></td></tr><tr><td>1</td><td>Screening for HIV</td></tr><tr><td>2</td><td>Screening for STI &amp; Syphilis</td></tr><tr><td>3</td><td>Screening for NCD</td></tr><tr><td>4</td><td>Screening for TB</td></tr><tr><td>5</td><td>&nbsp;Screening for Hepatitis B and C</td></tr><tr><td>6</td><td>Screening for Disabilities</td></tr><tr><td>7</td><td>Eye Check Up</td></tr><tr><td>8</td><td>Dental Check Up</td></tr><tr><td>9</td><td>Testing for Blood Group</td></tr><tr><td>10</td><td>Aadhar Enrollment</td></tr><tr><td>11</td><td>MHIS Enrollment</td></tr><tr><td>12</td><td>Disability Awareness Programme by DRCDA, Jowai</td></tr><tr><td>13</td><td>Mobilization drive of PwDs by DSWO, EJH</td></tr></tbody></table>
//       <a href={'../../../../Documents/pdf/INTEGRATED-HEALTH-CAMPAIGN1-1.pdf'} className=' text-blue-600 font-semibold'>INTEGRATED-HEALTH-CAMPAIGN1-1 - Download</a>
//     </div>
//   );
// };

// export default IntegratedHealthCampaign;



'use client';

import Script from 'next/script';
import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram embed script after component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-2 p-4'>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DG6xlFwhO4-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DFNxwJbBtZh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DFWkJpoyDU1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DF8Su-RNDtw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>

      {/* Instagram embed script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default InstagramEmbed;