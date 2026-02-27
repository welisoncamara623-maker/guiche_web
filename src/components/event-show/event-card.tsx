import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface EventCardProps {
    id: string;
    imageSrc: string;
    title: string;
    location: string;
    date: string;
    secondaryInfo?: string;
}

export function EventCard({
    id,
    imageSrc,
    title,
    location,
    date,
}: EventCardProps) {
    return (
        <Link
            href={`/pesquisa/manifesto-musical/${id}`}
            className="block w-full h-full"
        >
            <Card className="w-[95%] h-90 overflow-hidden border-none shadow-md rounded-2xl bg-white p-0 group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-xl">

                {/* IMAGEM */}
                <div className="relative w-full h-50">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* CONTEÚDO */}
                <CardContent className="flex flex-col flex-1 px-4 py-4">
                    <h3 className="text-sm font-bold leading-snug line-clamp-2 min-h-10.5 transition-colors">
                        {title}
                    </h3>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-500 font-semibold text-xs tracking-wide">
                            <MapPin size={14} className="text-gray-400" strokeWidth={2.5} />
                            <span className="uppercase">{location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 font-semibold text-xs tracking-wide">
                            <Calendar size={14} className="text-gray-400" strokeWidth={2.5} />
                            <span>{date}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
