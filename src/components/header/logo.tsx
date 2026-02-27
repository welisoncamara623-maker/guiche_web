import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo-branca.png" width={140} height={60} alt="Logo do Guichê Web" />


        </Link>
    );
}