import Image from 'next/image';
import Link from 'next/link';

import ribon from '../../assets/rebon3.jpg';
import footerBg from '../../assets/footer_bg.jpg';

const Footer = () => {
  return (
    <footer className="relative p-8 border-t-4 border-red-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: `url(${footerBg.src})`,
        }}
      ></div>
      
      <div className="relative z-10 grid md:grid-cols-4 grid-cols-1 md:text-left gap-8 bg-white bg-opacity-70 p-8 rounded-lg">
        {/* Column 1 */}
        <div>
          <div className="flex items-center md:justify-start justify-center mb-4">
            <Image src={ribon} alt="HIV Ribbon" width={10} height={10} className="mr-2" />
            <h3 className="text-red-600 text-xl md:text-left text-center font-bold">Directory of HIV Data</h3>
          </div>
          <ul className="text-sm text-black">
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Annual Report</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">HIV Facts and Figures</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Surveillance & Epidemiology</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Newsletter</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <div className="flex items-center md:justify-start justify-center mb-4">
            <Image src={ribon} alt="HIV Ribbon" width={10} height={10} className="mr-2" />
            <h3 className="text-red-600 text-xl md:text-left text-center font-bold">HIV/AIDS Awareness</h3>
          </div>
          <ul className="text-sm text-black">
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Know Your Rights</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Youth</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Social Protection Portal</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <div className="flex items-center md:justify-start justify-center mb-4">
            <Image src={ribon} alt="HIV Ribbon" width={10} height={10} className="mr-2" />
            <h3 className="text-red-600 text-xl md:text-left text-center font-bold">Partnership</h3>
          </div>
          <ul className="text-sm text-black">
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Bilateral and Multilateral Partners</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Civil Society</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Public & Private Sector Engagement</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Mainstreaming & Social Protection</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image src={ribon} alt="HIV Ribbon" width={10} height={10} className="mr-2" />
            <h3 className="text-red-600 text-xl md:text-left text-center font-bold">Quick Links</h3>
          </div>
          <ul className="text-sm text-black">
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">SACS</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">Publications</Link>
            </li>
            <li className="mb-2">
              <Link href="/page/annual-reports" className="hover:text-red-500">IT Applications of NACO</Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.naco.gov.in/labs-life-l4l-project" className="hover:text-red-500">Labs for Life Website</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
