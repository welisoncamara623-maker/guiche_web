import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">

                <Loader2
                    size={48}
                    className="text-green-600 animate-spin"
                    strokeWidth={2}
                />

                <div className="text-center">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-black">
                        Carregando
                    </h2>
                    <div className="h-0.5 w-8 bg-black mx-auto mt-2"></div>
                </div>

            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-green-600/20">
                <div className="h-full bg-green-600 w-1/4 animate-[pulse_2s_infinite]"></div>
            </div>
        </div>
    );
}