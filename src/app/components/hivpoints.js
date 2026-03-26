import Image from 'next/image';
import Link from 'next/link';
import ribon from '../../assets/rebon3.jpg';

const HivPoints = () => {
  const columns = [
    {
      title: "Directory of HIV Data",
      links: [
        { name: "Annual Report", href: "/page/annual-reports" },
        { name: "HIV Facts and Figures", href: "/page/annual-reports" },
        { name: "Surveillance & Epidemiology", href: "/page/annual-reports" },
        { name: "Newsletter", href: "/page/annual-reports" },
      ],
    },
    {
      title: "HIV/AIDS Awareness",
      links: [
        { name: "Know Your Rights", href: "/page/annual-reports" },
        { name: "Youth", href: "/page/annual-reports" },
        { name: "Social Protection Portal", href: "/page/annual-reports" },
      ],
    },
    {
      title: "Partnership",
      links: [
        { name: "Bilateral and Multilateral Partners", href: "/page/annual-reports" },
        { name: "Civil Society", href: "/page/annual-reports" },
        { name: "Public & Private Sector Engagement", href: "/page/annual-reports" },
        { name: "Mainstreaming & Social Protection", href: "/page/annual-reports" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "SACS", href: "/page/annual-reports" },
        { name: "Publications", href: "/page/annual-reports" },
        { name: "IT Applications of NACO", href: "/page/annual-reports" },
        { name: "Labs for Life Website", href: "https://www.naco.gov.in/labs-life-l4l-project" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t-4 border-brand section-padding">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 grid-cols-1 md:text-left gap-8 md:gap-10">
        {columns.map((col, i) => (
          <div key={i}>
            <div className="flex items-center md:justify-start justify-center mb-4 gap-2">
              <Image src={ribon} alt="HIV Ribbon" width={20} height={20} className="rounded-sm" />
              <h3 className="text-brand text-lg font-bold">{col.title}</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-2.5">
              {col.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="hover:text-brand transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default HivPoints;
