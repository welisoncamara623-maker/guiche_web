"use client"
import Image from "next/image";
import { SocialIcons } from "./social-icons";
import { FooterColumn, FooterLink } from "../ui/footer";

export function Footer() {
    return (
        <footer className="text-white bg-black">
            <div className="bg-zinc-900 border-b border-white/5 py-6">
                <SocialIcons />
            </div>

            <div className="bg-black container mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-4">

                <FooterColumn title="Institucional">
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="https://www.guicheweb.com.br/contato">Contato</FooterLink>
                    <FooterLink href="https://www.guicheweb.com.br/branding">Nossa Marca</FooterLink>
                    <FooterLink href="https://blog.guicheweb.com.br/">Blog</FooterLink>
                </FooterColumn>

                <FooterColumn title="Minha Conta">
                    <FooterLink href="#">Meus pedidos</FooterLink>
                    <FooterLink href="#">Alterar Senha</FooterLink>
                    <FooterLink href="#">Lembrar Senha</FooterLink>
                </FooterColumn>

                <FooterColumn title="Ajuda">
                    <FooterLink href="https://guicheweb.octadesk.com/kb">Dúvidas frequentes</FooterLink>
                    <FooterLink href="https://www.guicheweb.com.br/termos-e-politicas">Termos e políticas</FooterLink>
                    <FooterLink href="https://antifraude.guicheweb.com.br/seguranca/"> Antifraude</FooterLink>
                </FooterColumn>

                <div className="flex flex-col gap-6 md:items-start">
                    <div className="gap-4">
                        <div className="flex gap-4">
                            <Image
                                src="/footer/site-protegido.svg"
                                alt="Site protegido"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                            <Image
                                src="/footer/associado-abrape.svg"
                                alt="Associado ABRAPE"
                                width={80}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-wide">
                            COMPRE PELO APP
                        </p>
                        <div className="flex gap-3">
                            <Image
                                src="/footer/app-store.png"
                                alt="Disponível na App Store"
                                width={80}
                                height={40}
                                className="object-contain"
                            />
                            <Image
                                src="/footer/google-play.png"
                                alt="Disponível no Google Play"
                                width={80}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-2 pb-10 text-xs font-semibold">
                <p>Todos os preços e condições comerciais estão sujeitos a alteração comercial sem aviso prévio.</p>
                <span>©Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}