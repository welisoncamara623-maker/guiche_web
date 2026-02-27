"use client";

import { Search, MapPin } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface SearchBarProps {
    mobile?: boolean;
}

export function SearchBar({ mobile = false }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialValue = searchParams.get("search") || "";
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (value) {
                params.set("search", value);
            } else {
                params.delete("search");
            }

            router.replace(`?${params.toString()}`);
        }, 300);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <div
            className={`
        ${mobile ? "flex w-full" : "hidden md:flex w-[80%]"}
        items-center bg-[#2A2A2A] rounded-md px-3 py-2
        border border-transparent focus-within:border-gray-500 transition-all
      `}
        >
            <input
                autoFocus={mobile}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Faça sua pesquisa..."
                className="bg-transparent text-sm text-gray-300 outline-none w-full placeholder:text-gray-500"
            />
            <div className="flex items-center gap-3 ml-2 border-l border-gray-600 pl-3 text-gray-400">
                <Search size={18} />
                <MapPin size={18} />
            </div>
        </div>
    );
}