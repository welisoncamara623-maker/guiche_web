import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

export function SocialIcons() {
    return (
        // Removido o bg-zinc-800 daqui pois o container pai já possui o bg-zinc-900
        <div className="flex items-center justify-center gap-4">
            <SocialLink href="https://www.instagram.com/guicheweb">
                <FaInstagram size={20} />
            </SocialLink>

            <SocialLink href="https://www.facebook.com/GuicheWeb/?fref=ts">
                <FaFacebookF size={20} />
            </SocialLink>

            <SocialLink href="https://www.youtube.com/channel/UC9-7SFPICgrmnZRXhmpFVug">
                <FaYoutube size={20} />
            </SocialLink>

            <SocialLink href="https://www.youtube.com/channel/UC9-7SFPICgrmnZRXhmpFVug">
                <FaXTwitter size={20} />
            </SocialLink>
        </div>
    );
}

function SocialLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // Cores limpas: fundo preto com hover cinza
            className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-black text-white transition hover:bg-zinc-700 p-2 border border-white/10"
        >
            {children}
        </Link>
    );
}