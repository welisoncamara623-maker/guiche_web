import { Ticket, MapPinned, Info } from "lucide-react";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";

export function Infos({ event }: any) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const tabs = [
        { id: "ingressos", label: "Ingressos", icon: <Ticket size={18} /> },
        { id: "localizacao", label: "Localização", icon: <MapPinned size={18} /> },
        { id: "info", label: "Info", icon: <Info size={18} /> },
        { id: "video", label: "Vídeo", icon: <BsYoutube size={18} /> },
    ];

    return (
        <div className="flex flex-col md:flex-col items-center md:items-center gap-6">
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#f8f9fa] hover:bg-gray-200 border border-transparent hover:border-gray-200 rounded-md transition-all duration-200 shadow-sm hover:shadow-md text-zinc-700 font-medium group"
                    >
                        <span className="text-zinc-900 transition-colors">
                            {tab.icon}
                        </span>
                        <span className="text-sm md:text-base">
                            {tab.label}
                        </span>
                    </button>
                ))}
            </nav>
            <Image src={event.locationImage} alt={event.city} height={440} width={500} />
            <h2 className="text-2xl md:text-3xl font-bold">ADQUIRA SEU INGRESSO AGORA</h2>
        </div>
    );
}