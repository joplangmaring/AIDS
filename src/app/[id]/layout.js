import localFont from "next/font/local";
import "../globals.css";
import Footer from "../components/footer";
import Hivpoints from "../components/hivpoints";
import NearbyServices from "../components/NearbyServices";


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
            {/* <Navbar /> */}
            <div className="flex md:flex-row flex-col">
                {/* <Sidebar /> */}
                {children}
            </div>
            {/* <NearbyServices /> */}
            <Hivpoints />
            <Footer />
        </div>
    );
}
