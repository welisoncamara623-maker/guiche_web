"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { EventCard } from "./event-card";
import { EVENTS } from "@/data/events";

export function ListCards() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";

    const normalized = (text: string) =>
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const filteredEvents = useMemo(() => {
        if (!search) return EVENTS;

        const query = normalized(search);

        return EVENTS.filter((event) => {
            const matchesTitle = normalized(event.title).includes(query);

            const state = event.location.split("/")[1];
            const matchesState = state?.toLowerCase().includes(query);

            return matchesTitle || matchesState;
        });
    }, [search]);

    return (
        <section className="container mx-auto px-4 py-10 max-w-7xl">
            <div className="flex justify-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-center">
                    Resultados da Pesquisa
                </h2>
            </div>

            {filteredEvents.length > 0 ? (
                <div className="grid gap-5 md:px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            imageSrc={event.imageSrc}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-3xl">
                    <p className="text-slate-400 font-medium text-lg">
                        Nenhum evento encontrado para esta busca.
                    </p>
                </div>
            )}
        </section>
    );
}