import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Meghalaya Aids Control Society | 1097",
  description: "NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination. NACO has taken measures to ensure that people living with HIV have equal access to quality health services. By fostering close collaboration with NGOs, women's self-help groups, faith-based organisations, positive people's networks and communities, NACO hopes to improve access and accountability of the services. It stands committed to building an enabling environment wherein those infected and affected by HIV play a central role in all responses to the epidemic-at state, district and grassroot level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
