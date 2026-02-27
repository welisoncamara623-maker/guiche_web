"use client";

import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { NavActions } from "./nav-actions";
import { usePathname } from "next/navigation";
import { SearchMobile } from "./mobile/search-mobile";
import { MenuMobile } from "./mobile/menu-mobile";

export function Header() {
    const pathname = usePathname();

    const isManifestoDetail =
        pathname.startsWith("/pesquisa/manifesto-musical/") &&
        pathname.split("/").length > 3;

    return (
        <header className="w-full bg-black py-3 px-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

                <Logo />

                {/* Desktop Search */}
                {!isManifestoDetail && (
                    <div className="hidden md:flex flex-1 justify-center max-w-md">
                        <SearchBar />
                    </div>
                )}

                <div className="hidden md:block">
                    <NavActions />
                </div>

                <div className="flex md:hidden items-center gap-4">

                    {!isManifestoDetail && (
                        <SearchMobile />
                    )}

                    <MenuMobile />
                </div>
            </div>
        </header>
    );
}