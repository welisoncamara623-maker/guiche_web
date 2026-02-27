import { Footer } from "@/components/footer/fotter";
import { Header } from "@/components/header/header";
import BgEvent from "@/components/shows/bg-event";
import { EVENTS } from "@/data/events";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = EVENTS.find((e) => e.id === id);

    if (!event) {
        notFound();
    }

    return (
        <Suspense>
            <Header />
            <BgEvent event={event} />
            <Footer />
        </Suspense>
    );
}