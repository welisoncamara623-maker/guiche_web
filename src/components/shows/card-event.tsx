import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Infos } from "./infos";
import { VideoTurne } from "./video-turne";
import { Informations } from "./informations";
import { TicketsContainer } from "./tickets/tickets-container";

export function CardEvent({ event }: { event: any }) {
    if (!event) return null;

    return (
        <div className="bg-white shadow-xl flex flex-col overflow-hidden rounded-b-xl">

            <div className="flex flex-col md:flex-row">

                {/* LADO ESQUERDO: Imagem e Compartilhamento */}
                <div className="p-4 flex flex-col border-r border-gray-100 items-center md:items-start">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-md overflow-hidden shadow-sm">
                        <Image src={event.imageSrc} alt={event.title} fill className="object-cover" />
                    </div>

                    <div className="flex items-center justify-between mt-4 px-2 w-full max-w-64 md:max-w-72">
                        <p className="text-gray-400 text-sm font-medium">Compartilhar</p>
                        <nav className="flex items-center gap-4 text-gray-500">

                            <a
                                href="https://api.whatsapp.com/send?text=Guiche%20Web%20https%3A%2F%2Fwww.guicheweb.com.br%2Fmanifesto-musical-fortaleza_49751"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500"
                            >
                                <FaWhatsapp size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.guicheweb.com.br%2Fmanifesto-musical-fortaleza_49751&t=Guiche Web&quote="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="https://www.facebook.com/dialog/send?link=https%3A%2F%2Fwww.guicheweb.com.br%2Fmanifesto-musical-fortaleza_49751"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaFacebookMessenger size={18} />
                            </a>

                            <a
                                href="https://x.com/intent/tweet?text=Guiche Web https%3A%2F%2Fwww.guicheweb.com.br%2Fmanifesto-musical-fortaleza_49751"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-black"
                            >
                                <FaXTwitter size={16} />
                            </a>

                        </nav>
                    </div>
                </div>

                {/* LADO DIREITO: Informações */}
                <div className="flex-1 p-6 md:p-10 bg-white">
                    <h1 className="text-2xl md:text-3xl font-semibold text-zinc-800 mb-2">
                        {event.title}
                    </h1>

                    <div className="flex flex-col gap-1 mb-4">
                        <p className="text-xl text-zinc-700 font-medium">{event.date}</p>
                        <p className="text-sm text-zinc-500 uppercase">{event.time || "22H"}</p>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-600 mb-6">
                        <MapPin size={18} className="text-zinc-800" />
                        <span className="text-base font-semibold uppercase ">
                            {event.city} - {event.location}
                        </span>
                    </div>

                    <div className="mt-4 w-fit text-zinc-600 hover:text-pink-500 transition-colors">
                        <Link href="https://www.instagram.com/manifestomusicaloficial/"><FaInstagram size={20} /></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 p-6 flex justify-center bg-zinc-50/30">
                <Infos event={event} />
            </div>
            <TicketsContainer event={event} sectors={event.sectors} />
            <VideoTurne />
            <h2 className="text-center font-semibold text-4xl my-4">Informações</h2>
            <Informations event={event} />

        </div>
    );
}