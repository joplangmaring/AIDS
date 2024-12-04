import Sidebar from "../components/Sidebar";



export default function AdminLayout({ children }) {
    return (
        <div
            className={`flex bg-[#e0e0e0] md:flex-row flex-col`}
        >
            <Sidebar />
            <div className="w-full min-h-screen md:pt-0 pt-20">
                {children}

            </div>
        </div>
    );
}
