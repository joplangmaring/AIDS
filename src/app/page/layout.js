import localFont from "next/font/local";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hivpoints from "../components/hivpoints";
import NearbyServices from "../components/NearbyServices";

//Assets
import commonBg from '../../assets/bg_general_2.jpg';

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <Navbar />
            <div className="relative py-10 md:px-10 px-5">
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-xs"
                    style={{
                        backgroundImage: `url(${commonBg.src})`,
                    }}
                >
                </div>

                <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-lg p-2 md:p-12 rounded-lg shadow-[0_26px_58px_0_rgba(0,0,0,0.22),0_5px_14px_0_rgba(0,0,0,0.18)] mx-auto">
                    {children}
                </div>
                {/* {children} */}
            </div>
            <NearbyServices />
            <Hivpoints />
            <Footer />
        </div>
    );
}
