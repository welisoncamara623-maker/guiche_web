import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

export function Informations({ event }: any) {
    return (
        <>
            <div id="localizacao" className="bg-gray-300 w-full md:w-[90%] max-w-350 mx-auto">
                <div className="max-w-5xl mx-auto px-8 py-8 space-y-10">
                    <h3 className="text-xl font-bold text-center">
                        Manifesto Musical - Turnê 2026
                    </h3>

                    {/* SOBRE */}
                    {event.about && (
                        <section className="space-y-4">
                            <h4 className="text-2xl font-semibold">Sobre o Evento</h4>

                            {event.about.map((text: string, index: number) => (
                                <p key={index} className="leading-relaxed">
                                    {text}
                                </p>
                            ))}
                        </section>
                    )}

                    {/* FAQ */}
                    {event.faq && (
                        <section className="space-y-4">
                            <h4 className="text-2xl font-semibold">
                                Dúvidas Frequentes
                            </h4>

                            {event.faq.map((item: any, index: number) => (
                                <div key={index} className="space-y-1">
                                    <p className="font-semibold">
                                        {index + 1}. {item.question}
                                    </p>
                                    <p>{item.answer}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* INFORMAÇÕES IMPORTANTES */}
                    {event.importantInfo && (
                        <section className="space-y-4">
                            <h4 className="text-2xl font-semibold">
                                Informações Importantes
                            </h4>

                            {event.importantInfo.map(
                                (info: string, index: number) => (
                                    <p key={index}>{info}</p>
                                )
                            )}
                        </section>
                    )}

                    {/* CONTATO */}
                    {event.contact && (
                        <section className="space-y-2">
                            <h4 className="text-2xl font-semibold">
                                Atendimento
                            </h4>

                            <p>Email: {event.contact.email}</p>

                            {event.contact.phones?.map(
                                (phone: string, index: number) => (
                                    <p key={index} className="text-blue-600 cursor-pointer font-semibold hover:underline" >{phone}</p>
                                )
                            )}

                            <p>{event.contact.serviceHours}</p>
                        </section>
                    )}
                </div>
            </div>

            {/* BLOCO TERMOS (COLLAPSE) */}
            <div id="info" className="bg-gray-300 w-full md:w-[90%] max-w-350 my-6 mx-auto">
                <div className="max-w-5xl mx-auto px-8 py-8 space-y-10">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="terms"
                        className="w-full"
                    >
                        <AccordionItem
                            value="terms"
                            className="border-none w-full"
                        >
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline min-h-16 py-5">
                                Termos e Condições
                            </AccordionTrigger>

                            <AccordionContent className="space-y-4 text-sm leading-relaxed pt-4">
                                <p>
                                    1. Todas as disposições aplicáveis às vendas de ingressos
                                    pela plataforma da Guichê Web se encontram previstas
                                    nos Termos de Uso...
                                </p>

                                <p>
                                    2. A Guichê Web é uma plataforma intermediária
                                    especializada na venda de ingressos online...
                                </p>

                                <p>
                                    3. Como livremente aceito e previsto nos Termos de
                                    Uso...
                                </p>

                                <p>
                                    4. Cabe ao organizador do evento garantir
                                    conformidade com a legislação aplicável...
                                </p>

                                <p>
                                    5. Nosso site (www.guicheweb.com.br) e nosso App são
                                    os únicos canais oficiais...
                                </p>

                                <p>
                                    6. A Guichê Web não permite e repudia a venda de
                                    ingressos para eventos irregulares...
                                </p>

                                <p>
                                    7. Para acessar o evento é obrigatória a apresentação
                                    do ingresso...
                                </p>

                                <p>
                                    8. O não comparecimento ao evento invalidará o
                                    ingresso...
                                </p>

                                <p>
                                    9. O(a) próprio(a) consumidor(a) é o único responsável
                                    pela transferência...
                                </p>

                                <p>
                                    10. Compras suspeitas ou com evidências de fraude
                                    serão recusadas...
                                </p>

                                <p>
                                    11. Solicitações de estorno deverão ser efetuadas em
                                    até 7 dias...
                                </p>

                                <p>
                                    12. Informações adicionais poderão ser solicitadas à
                                    Guichê Web...
                                </p>

                                <p>
                                    13. O horário de atendimento do SAC é das 08h às
                                    18h...
                                </p>

                                <p>
                                    14. Ainda precisa de ajuda? Acesse nosso site e clique
                                    em "Contato"...
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
}
