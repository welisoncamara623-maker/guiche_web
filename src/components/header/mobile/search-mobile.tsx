import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { SearchBar } from "../search-bar";

export function SearchMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="text-white p-1">
                    <Search size={24} />
                </button>
            </SheetTrigger>

            <SheetContent
                side="top"
                className="bg-black border-none pt-6 pb-8"
            >
                <div className="px-4">
                    <SearchBar mobile />
                </div>
            </SheetContent>
        </Sheet>
    )
}