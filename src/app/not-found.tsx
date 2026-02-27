"use client"
import Link from 'next/link';
import { FileQuestion, MoveLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-black">
            <div className="mb-8 text-green-600">
                <FileQuestion size={80} strokeWidth={1.5} />
            </div>

            <div className="text-center space-y-4">
                <h1 className="text-9xl font-black text-green-600 tracking-tighter">
                    404
                </h1>

                <h2 className="text-3xl font-bold uppercase tracking-widest border-b-4 border-black pb-2 inline-block">
                    Página não encontrada
                </h2>

                <p className="max-w-md mx-auto text-gray-600 font-medium pt-4">
                    Parece que você se perdeu pelo caminho. O link que você seguiu pode estar quebrado ou a página foi removida.
                </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-none hover:bg-green-600 transition-colors duration-300 font-bold group"
                >
                    <Home size={18} />
                    Ir para página inicial
                </Link>

                <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center gap-2 border-2 border-black px-8 py-3 rounded-none hover:bg-green-50 transition-colors duration-300 font-bold"
                >
                    <MoveLeft size={18} />
                    Voltar a página anterior
                </button>
            </div>

            <div className="absolute bottom-10 flex gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
        </div>
    );
}