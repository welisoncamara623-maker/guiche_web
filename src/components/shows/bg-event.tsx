"use client";

import Image from "next/image";
import { CardEvent } from "./card-event";

export default function BgEvent({ event }: any) {
    const bgImage = event.bg_ticket || "/default-bg.jpg";
    const bgColor = event.bg_color || "#f4f4f4";

    return (
        <main
            className="min-h-screen transition-colors duration-500"
            style={{ backgroundColor: bgColor }}
        >
            <div className="relative w-full">
                <Image
                    src={bgImage}
                    alt={event.title}
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-auto"
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to bottom, transparent 60%, ${bgColor})`,
                    }}
                />
            </div>

            {/* 2. CONTAINER DO CARD */}
            <div className="relative max-w-6xl mx-auto px-4 z-20 pb-20">

                {/* BORDA ARREDONDADA (Picote de Ticket) */}
                <div
                    className="w-full h-6 bg-white"
                    style={{
                        maskImage: "radial-gradient(circle at 12px -6px, transparent 10px, white 11px)",
                        WebkitMaskImage: "radial-gradient(circle at 12px -6px, transparent 10px, white 11px)",
                        maskSize: "30px 100%",
                        WebkitMaskSize: "30px 100%",
                        maskRepeat: "repeat-x",
                        WebkitMaskRepeat: "repeat-x"
                    }}
                />

                {/* COMPONENTE DO CARD */}
                <CardEvent event={event} />
            </div>
        </main>
    );
}