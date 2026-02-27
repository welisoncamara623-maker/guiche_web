import Link from "next/link";

export function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h4 className="font-extrabold mb-4 text-xl">{title}</h4>
            <div className="flex flex-col gap-3 text-sm text-white/80">
                {children}
            </div>
        </div>
    );
}

export function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="
            text-base
            font-semibold
    transition-all
    duration-200
    rounded
    p-2
    hover:bg-zinc-900
    hover:text-green-600
  "
        >

            {children}
        </Link>
    );
}
