
const baseEvent = {
    subtitle:
        "MANIFESTO MUSICAL TURNÊ 2026: PORQUE ALGUNS ENCONTROS PRECISAM ACONTECER AO VIVO!",

    time: "14:00H",

    about: [
        "A primeira dupla sertaneja a esgotar ingressos no Maracanã/RJ...",
        "A turnê nasceu após três apresentações com ingressos esgotados no Allianz Parque...",
        "A proposta do Manifesto Musical vai além da música...",
        "Prepare-se para uma apresentação histórica..."
    ],

    faq: [
        {
            question:
                "Será permitida a entrada de menores acompanhados e com autorização?",
            answer:
                "Censura do evento 18 anos. Não será permitida a entrada de menores mesmo que estejam acompanhados."
        },
        {
            question:
                "Quais alimentos serão aceitos na portaria com ingresso solidário?",
            answer:
                "Apenas alimentos não perecíveis, embalados de fábrica, dentro do prazo de validade."
        },
        {
            question: "Qual horário de abertura dos portões?",
            answer: "A abertura está prevista para às 14 horas."
        },
        {
            question: "O evento terá open bar?",
            answer:
                "Sim! Todos os setores são open bar. Confira os detalhes em cada área."
        }
    ],

    importantInfo: [
        "Este evento poderá ser gravado, filmado ou fotografado.",
        "É proibida a entrada com copos, latas, cadeiras, objetos cortantes, drones, entre outros.",
        "Cuide dos seus pertences.",
        "Chegue cedo, evite filas e divirta-se."
    ],

    contact: {
        email: "sac@guicheweb.com.br",
        phones: [
            "(11) 4765-6655 – São Paulo",
            "(21) 4042-3944 – Rio de Janeiro"
        ],
        serviceHours:
            "Segunda a sexta, das 8h às 18h (exceto feriados)"
    },

}

export const EVENTS = [
    {
        ...baseEvent,
        id: "manifesto-go",
        imageSrc: "/show_go.jpg",
        bg_ticket: "/tickets/bg_ticket_go.png",
        bg_color: "#0c0361",
        title: "Manifesto Musical - Goiânia",
        location: "GOIÂNIA/GO",
        city: "Estádio Serra Dourada",
        locationImage: "/locations/location_show_go.jpg",
        date: "02/05/2026",

        sectors: [
            {
                id: "premium-go",
                color: "bg-yellow-500",
                title: "Premium - Open Bar +18",
                description:
                    "Open Bar: Gin, vodka, whisky 08 anos, cerveja, água e refrigerante.",
                tickets: [
                    {
                        id: "premium-go-solidaria",
                        name: "Premium (Solidária)",
                        lote: "3º LOTE + 1KG DE ALIMENTO",
                        price: 119.90,
                        saibaMais: true
                    },
                    {
                        id: "premium-go-meia",
                        name: "Premium (Meia)",
                        lote: "3º LOTE",
                        price: 149.90,
                        info: true
                    },
                    {
                        id: "premium-go-inteira",
                        name: "Premium (Inteira)",
                        lote: "3º LOTE",
                        price: 169.90
                    }
                ]
            },
            {
                id: "camarote-go",
                color: "bg-purple-600",
                title: "Camarote Alô Inveja - Open Bar e Open Food +18",
                description:
                    "Open Bar Premium + Open Food: comidas típicas, petiscos e muito mais.",
                tickets: [
                    {
                        id: "camarote-solidaria-go",
                        name: "Camarote (Solidária)",
                        lote: "1º LOTE",
                        price: 279.99
                    },
                    {
                        id: "camarote-inteira-go",
                        name: "Camarote (Inteira)",
                        lote: "1º LOTE",
                        price: 394.99
                    }
                ]
            },
            {
                id: "extra-vip-go",
                color: "bg-blue-500",
                title: "Extra VIP - Open Bar +18",
                description: "Open Bar: Cerveja, água e refrigerante.",
                tickets: [
                    {
                        id: "vip-solidaria-go",
                        name: "Extra VIP (Solidária)",
                        lote: "1º LOTE",
                        price: 349.99
                    },
                    {
                        id: "vip-inteira-go",
                        name: "Extra VIP (Inteira)",
                        lote: "1º LOTE",
                        price: 499.90
                    }
                ]
            }
        ]
    },

    {
        ...baseEvent,
        id: "manifesto-mg",
        imageSrc: "/show_mg.jpg",
        bg_ticket: "/tickets/bg_ticket_mg.png",
        bg_color: "#420328",
        title: "Manifesto Musical - Belo Horizonte",
        location: "BELO HORIZONTE/MG",
        city: "Mineirão",
        locationImage: "/locations/location_show_mg.jpg",
        date: "18/07/2026",
        sectors: [
            {
                id: "premium-mg",
                color: "bg-blue-500",
                title: "Camarote na sala",
                description:
                    "Open Bar: Cerveja, Vodka, Gin, Whisky, Refrigerante, Tônica e Água.",
                tickets: [
                    {
                        id: "camarote-sala-solidaria-mg",
                        name: "Premium na sala (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 99.99,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "camarote-sala-meia-mg",
                        name: "Camarote na sala (Meia)",
                        lote: "4º LOTE",
                        price: 139.99,
                        saibaMais: true,
                        esgoted: false
                    },

                ]
            },
            {
                id: "epaco-ultima-saudade-mg",
                color: "bg-blue-700",
                title: "Espaço Útima saudade",
                description:
                    "Open Bar: Cerveja, Refrigerante, Água.",
                tickets: [
                    {
                        id: "ultima-saudade-solidaria-mg",
                        name: "Espaço Última saudade (Solidária)",
                        lote: "5º LOTE + 1KG DE ALIMENTO",
                        price: 450,
                        saibaMais: true,
                        esgoted: true
                    },
                ]
            },
            {
                id: "gramado-mg",
                color: "bg-green-500",
                title: "",
                description: "A partir de 225,00",
                tickets: [
                    {
                        id: "gramado-solidaria-mg",
                        name: "Gramado (Solidária)",
                        lote: "3º LOTE + 1KG DE ALIMENTO",
                        price: 249.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "gramado-meia-mg",
                        name: "Gramado (Meia)",
                        lote: "3º LOTE",
                        price: 229.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "gramado-inteira-mg",
                        name: "Gramado (Inteira)",
                        lote: "3º LOTE",
                        price: 499.90,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "arquibancada-mg",
                color: "bg-orange-600",
                title: "",
                description: "A partir de 84,00",
                tickets: [
                    {
                        id: "arquibancada-solidaria-mg",
                        name: "Arquibancada (Solidária)",
                        lote: "5º LOTE + 1KG DE ALIMENTO",
                        price: 89.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arquibancada-meia-mg",
                        name: "Arquibancada (Meia)",
                        lote: "5º LOTE",
                        price: 89.90,
                        SaibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arquibancada-inteira-mg",
                        name: "Arquibancada (Inteira)",
                        lote: "4º LOTE",
                        price: 189.90,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            }
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-sp-esgotado",
        imageSrc: "/show_sp_esgotado.jpg",
        bg_ticket: "/tickets/bg_ticket_sp_esgotado.png",
        bg_color: "#141414",
        title: "Manifesto Musical - São Paulo",
        location: "SÃO PAULO/SP",
        city: "Mercado Livre Arena Pacaembu",
        locationImage: "/locations/location_show_sp.jpg",
        date: "01/08/2026",
        sectors: [
            {
                id: "premium-mg",
                color: "bg-blue-500",
                title: "Camarote na sala",
                description:
                    "Open Bar: Cerveja, Vodka, Gin, Whisky, Refrigerante, Tônica e Água.",
                tickets: [
                    {
                        id: "camarote-sala-solidaria-mg",
                        name: "Premium na sala (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 199.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "camarote-sala-meia-mg",
                        name: "Camarote na sala (Meia)",
                        lote: "4º LOTE",
                        price: 239.90,
                        saibaMais: true,
                        esgoted: false
                    },

                ]
            },
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-sp",
        imageSrc: "/show_sp.jpg",
        bg_ticket: "/tickets/bg_ticket_sp.png",
        bg_color: "#141414",
        title: "Manifesto Musical - São Paulo - DATA EXTRA",
        location: "SÃO PAULO/SP",
        city: "Mercado Livre Arena Pacaembu",
        locationImage: "/locations/location_show_sp.jpg",
        date: "02/08/2026",

        sectors: [
            {
                id: "frontstage-sp",
                color: "bg-teal-400",
                title: "Frontstage",
                description:
                    "Portão de acesso 23.",
                tickets: [
                    {
                        id: "frontstage-solidaria-sp",
                        name: "Frontstage (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 339.50,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "frontstage-meia-sp",
                        name: "Frontstage (Meia)",
                        lote: "4º LOTE",
                        price: 339.50,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "frontstage-inteira-sp",
                        name: "Frontstage (Inteira)",
                        lote: "4º LOTE",
                        price: 339.50,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "premiun-sp",
                color: "bg-zinc-800",
                title: "Premiun",
                description:
                    "Portão de acesso 1 e 2.",
                tickets: [
                    {
                        id: "frontstage-solidaria-sp",
                        name: "Premiun (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 449.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "frontstage-meia-sp",
                        name: "Premiun (Meia)",
                        lote: "4º LOTE",
                        price: 429.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "frontstage-inteira-sp",
                        name: "Frontstage (Inteira)",
                        lote: "4º LOTE",
                        price: 499.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "espaco-familia-sp",
                color: "bg-blue-700",
                title: "Espaço familia",
                description:
                    "Portão de acesso 3 e 4.",
                tickets: [
                    {
                        id: "espaco-familia-sp",
                        name: "Espaço familia (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 139.99,
                        saibaMais: true,
                        esgoted: true
                    },

                ]
            },
            {
                id: "cadeira-leste-sp",
                color: "bg-rose-700",
                title: "Cadeira leste",
                description:
                    "Portão de acesso 9 e 19",
                tickets: [
                    {
                        id: "cadeira-leste-sp",
                        name: "Frontstage (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 235.55,
                        saibaMais: true,
                        esgoted: false
                    },
                ]
            },
            {
                id: "cadeira-oeste-sp",
                color: "bg-orange-700",
                title: "Cadeira oeste",
                description:
                    "Portão de acesso 8 e 20",
                tickets: [
                    {
                        id: "cadeira-oeste-solidaria-sp",
                        name: "Cadeira oeste (Solidária)",
                        lote: "5º LOTE + 1KG DE ALIMENTO",
                        price: 265.55,
                        saibaMais: true,
                        esgoted: false
                    },
                ]
            }
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-pe",
        imageSrc: "/show_pe.jpg",
        bg_ticket: "/tickets/bg_ticket_pe.png",
        bg_color: "#009C3B",
        title: "Manifesto Musical - Recife",
        location: "OLINDA/PE",
        city: "Árena Externa Centro de Conveçõesa ",
        locationImage: "/locations/location_show_pe.png",
        date: "08/08/2026",

        sectors: [
            {
                id: "arena-vip-pe",
                color: "bg-blue-600",
                title: "Arena vip",
                description: "",
                tickets: [
                    {
                        id: "arena-vip-pe",
                        name: "Arena vip (Solidária)",
                        lote: "2º LOTE + 1KG DE ALIMENTO",
                        price: 129.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arena-vip-meia-pe",
                        name: "Arena vip (Meia)",
                        lote: "2º LOTE",
                        price: 119.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "arena-vip-inteira-pe",
                        name: "Arena vip (Inteira)",
                        lote: "2º LOTE",
                        price: 229.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "open-bar-pe",
                color: "bg-yellow-400",
                title: "Open bar +18",
                description:
                    "Open Bar: Whisky, Vodka, Gin, Cerveja, Água, Refrigerante e Água Tônica",
                tickets: [
                    {
                        id: "open-bar-pe",
                        name: "Open bar",
                        lote: "3º LOTE ",
                        price: 339.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "espaco-wedo-pe",
                color: "bg-red-700",
                title: "Espaço wedo +18",
                description:
                    "Open Bar: Whisky 12 anos, Vodka Importada, Gin, Espumante, Caipifruta da Venda, Cerveja, Água, Refrigerante, Energético, Água de Côco e Água Tônica.",
                tickets: [
                    {
                        id: "espaco-wedo-pe",
                        name: "Espaço  wedo",
                        lote: "2º LOTE",
                        price: 345.60,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
        ]

    },
    {
        ...baseEvent,
        id: "manifesto-am",
        imageSrc: "/show_am.jpg",
        bg_ticket: "/tickets/bg_ticket_am.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Manaus",
        location: "MANAUS/AM",
        city: "Arena da Amazônia",
        locationImage: "/locations/location_show_am.jpg",
        date: "22/08/2026",

        sectors: [
            {
                id: "pista-am",
                color: "bg-purple-600",
                title: "Pista",
                description: "",
                tickets: [
                    {
                        id: "pista-solidaria-am",
                        name: "Pista (Solidária)",
                        lote: "4º LOTE + 1KG DE ALIMENTO",
                        price: 139.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "pista-meia-am",
                        name: "Pista (Meia)",
                        lote: "4º LOTE",
                        price: 139.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "pista-inteira-am",
                        name: "Pista (Inteira)",
                        lote: "4º LOTE",
                        price: 269.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "area-vip-am",
                color: "bg-rose-500",
                title: "Área vip",
                description:
                    "Open Bar: Água, Cerveja e Refrigerante até ás 3:00h.",
                tickets: [
                    {
                        id: "area-vip-solidaria-am",
                        name: "Área vip (Solidária)",
                        lote: "6º LOTE ",
                        price: 222.50,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "area-vip-meia-am",
                        name: "Área vip (Meia)",
                        lote: "6º LOTE ",
                        price: 222.50,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "area-vip-inteira-am",
                        name: "Área vip (Inteira)",
                        lote: "6º LOTE ",
                        price: 465.50,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "camarote-extra-vip-am",
                color: "bg-yellow-600",
                title: "Camarote extra VIP",
                description: "Open Bar: Água, Cerveja, Refrigerante e Whisky; até o final do evento. Open Food até às 3:00h.",
                tickets: [
                    {
                        id: "extra-vip-solidaria-am",
                        name: "Extra VIP (Solidária)",
                        lote: "4º LOTE",
                        price: 425.50,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "extra-vip-meia-am",
                        name: "Extra VIP (Meia)",
                        lote: "4º LOTE",
                        price: 425.50,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "extra-vip-inteira-am",
                        name: "Extra VIP (Inteira)",
                        lote: "4º LOTE",
                        price: 450.50,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "camarote-arena-am",
                color: "bg-cyan-500",
                title: "Camarote arena",
                description: "Ingresso avulso",
                tickets: [
                    {
                        id: "camarote-arena-solidaria228-am",
                        name: "Camarote arena (Solidária)",
                        lote: "CAMAROTE 228 - LOTE UNICO + 1KG DE ALIMENTO",
                        price: 109,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "camarote-arena-solidaria239-am",
                        name: "Extra VIP (Solidária)",
                        lote: "CAMAROTE 239 - LOTE UNICO + 1KG DE ALIMENTO",
                        price: 109,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "camarote-arena-meia-am",
                        name: "Camarote arena (Meia)",
                        lote: "CAMAROTE 228 - LOTE UNICO",
                        price: 109,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "camarote-arena-inteira-am",
                        name: "Camarote arena (Inteira)",
                        lote: "CAMAROTE 228 - LOTE UNICO",
                        price: 229,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-es",
        imageSrc: "/show_es.jpg",
        bg_ticket: "/tickets/bg_ticket_es.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Cariacica",
        location: "Cariacica/ES",
        city: "Estádio Kleber Andrade",
        locationImage: "/locations/location_show_es.jpg",
        date: "05/09/2026",

        sectors: [
            {
                id: "open-bar-es",
                color: "bg-red-400",
                title: "Open bar +18",
                description: "Open Bar: Vodka, Whisky, Cerveja, Refrigerante e Água.",
                tickets: [
                    {
                        id: "open-bar-solidaria-es",
                        name: "Open bar (Solidária)",
                        lote: "4. LOTE + 1KG DE ALIMENTO",
                        price: 345.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "open-bar-meia-es",
                        name: "Open bar (Meia)",
                        lote: "4. LOTE",
                        price: 345.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "open-bar-inteira-es",
                        name: "Open bar (Inteira)",
                        lote: "4. LOTE",
                        price: 499.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "frontstage-es",
                color: "bg-green-500",
                title: "Frontstage",
                description: "",
                tickets: [
                    {
                        id: "frontstage-solidaria-es",
                        name: "Frontstage (Solidária)",
                        lote: "3. LOTE + 1KG DE ALIMENTO",
                        price: 369.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "frontstage-meia-es",
                        name: "Frontstage (Meia)",
                        lote: "3º LOTE ",
                        price: 369.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "frontstage-inteira-es",
                        name: "Frontstage (Inteira)",
                        lote: "3º LOTE ",
                        price: 599.90,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "area-vip-es",
                color: "bg-yellow-600",
                title: "Área vip",
                description: "",
                tickets: [
                    {
                        id: "area-vip-solidaria-es",
                        name: "Área vip (Solidária)",
                        lote: "3. LOTE + 1KG DE ALIMENTO",
                        price: 190.99,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "area-vip-meia-es",
                        name: "Área vip (Meia)",
                        lote: "3º LOTE",
                        price: 190.99,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "area-vip-inteira-es",
                        name: "Área vip (Inteira)",
                        lote: "3º LOTE",
                        price: 389.99,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "cadeira-ab-es",
                color: "bg-zinc-700",
                title: "Cadeira AB",
                description: "",
                tickets: [
                    {
                        id: "cadeira-ab-solidaria-es",
                        name: "Cadeira AB (Solidária)",
                        lote: "2. LOTE + 1KG DE ALIMENTO",
                        price: 170,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "cadeira-ab-meia-es",
                        name: "Cadeira AB (Meia)",
                        lote: "2.LOTE",
                        price: 170,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "cadeira-ab-inteira-es",
                        name: "Cadeira AB (Inteira)",
                        lote: "2. LOTE",
                        price: 340,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-df",
        imageSrc: "/show_df.png",
        bg_ticket: "/tickets/bg_ticket_df.png",
        bg_color: "#0033A0",
        title: "Manifesto Musical - Brasília",
        location: "BRASÍLIA/DF",
        city: "Arena BRB Mané Garrincha",
        locationImage: "/locations/location_show_df.jpg",
        date: "19/09/2026",
        sectors: [
            {
                id: "cadeira-ab-es",
                color: "bg-zinc-700",
                title: "Cadeira AB",
                description: "",
                tickets: [
                    {
                        id: "cadeira-ab-solidaria-es",
                        name: "Cadeira AB (Solidária)",
                        lote: "2. LOTE + 1KG DE ALIMENTO",
                        price: 229.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "cadeira-ab-meia-es",
                        name: "Cadeira AB (Meia)",
                        lote: "2.LOTE",
                        price: 259.99,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "cadeira-ab-inteira-es",
                        name: "Cadeira AB (Inteira)",
                        lote: "2. LOTE",
                        price: 299.99,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
        ]
    },
    {
        ...baseEvent,
        id: "manifesto-rs",
        imageSrc: "/show_rs.jpg",
        bg_ticket: "/tickets/bg_ticket_rs.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Porto Alegre",
        location: "PORTO ALEGRE/RS",
        city: "Estádio Beira-Rio",
        locationImage: "/locations/location_show_rs.jpeg",
        date: "07/11/2026",

        sectors: [
            {
                id: "backstage-all-inclusive-rs",
                color: "bg-purple-700",
                title: "Backstage ALL inclusive",
                description: "Serviço All Inclusive: Open Bar de Água, Cerveja, Refrigerante, Gin, Vodka, Whisky, Espumante, Energético e Finger Foods. Serviço até 23:30h. Acesso pelo Portão 08.",
                tickets: [
                    {
                        id: "backstage-all-inclusive-solidario-rs",
                        name: "Backstage All Inclusive (Solidário)",
                        lote: "4. LOTE + 1KG DE ALIMENTO",
                        price: 299.99,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "backstage-all-inclusive-meia-rs",
                        name: "Backstage (Meia)",
                        lote: "4. LOTE",
                        price: 299.99,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "backstage-all-inclusive-inteira-rs",
                        name: "Backstage (Inteira)",
                        lote: "4. LOTE",
                        price: 499.99,
                        saibaMais: false,
                        esgoted: false
                    },

                ]
            },
            {
                id: "frontstage-open-bar-rs",
                color: "bg-orange-500",
                title: "Frontstage Open Bar",
                description: "Open Bar: Água, Cerveja, Refrigerante, Vodka, Gin, Energético. Serviço até 23:30h. Acesso pelos Portões 3 e 6.",
                tickets: [
                    {
                        id: "frontstage-solidario",
                        name: "Frontstage Open Bar (Solidário)",
                        lote: "3. LOTE + 1KG DE ALIMENTO",
                        price: 430.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "frontstage-meia",
                        name: "Frontstage Open Bar (Meia)",
                        lote: "3. LOTE",
                        price: 410.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "frontstage-inteira",
                        name: "Frontstage Open Bar (Inteira)",
                        lote: "3. LOTE",
                        price: 599.90,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "cadeira-edvaldo-rs",
                color: "bg-red-600",
                title: "Cadeira Open Bar - Acesso Edvaldo",
                description: "Ocupação por ordem de chegada. Open Bar: Água, Cerveja e Refrigerante. Serviço até 23:30h. Acesso pelo Portão 01.",
                tickets: [
                    {
                        id: "cadeira-edvaldo-solidario",
                        name: "Cadeira Open Bar - Edvaldo (Solidário)",
                        lote: "3. LOTE + 1KG DE ALIMENTO",
                        price: 321,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "cadeira-edvaldo-meia",
                        name: "Cadeira Open Bar - Edvaldo (Meia)",
                        lote: "3. LOTE",
                        price: 321,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "cadeira-edvaldo-inteira",
                        name: "Cadeira Open Bar - Edvaldo (Inteira)",
                        lote: "3. LOTE",
                        price: 600,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "cadeira-padre-cacique-rs",
                color: "bg-red-600",
                title: "Cadeira Open Bar - Acesso Padre Cacique",
                description: "Ocupação por ordem de chegada. Open Bar: Água, Cerveja e Refrigerante. Serviço até 23:30h. Acesso pelos Portões 4 e 5.",
                tickets: [
                    {
                        id: "cadeira-padre-solidario",
                        name: "Cadeira Open Bar - Padre Cacique (Solidário)",
                        lote: "4. LOTE + 1KG DE ALIMENTO",
                        price: 310.50,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "cadeira-padre-meia",
                        name: "Cadeira Open Bar - Padre Cacique (Meia)",
                        lote: "4. LOTE",
                        price: 290.50,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "cadeira-padre-inteira",
                        name: "Cadeira Open Bar - Padre Cacique (Inteira)",
                        lote: "4. LOTE",
                        price: 480.50,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "extra-vip-rs",
                color: "bg-lime-500",
                title: "Extra VIP",
                description: "Acesso pelo Portão 2.",
                tickets: [
                    {
                        id: "extra-vip-solidario",
                        name: "Extra VIP (Solidário)",
                        lote: "3. LOTE + 1KG DE ALIMENTO",
                        price: 130.99,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "extra-vip-meia",
                        name: "Extra VIP (Meia)",
                        lote: "3. LOTE",
                        price: 120.99,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "extra-vip-inteira",
                        name: "Extra VIP (Inteira)",
                        lote: "3. LOTE",
                        price: 240.99,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "cadeira-superior-rs",
                color: "bg-purple-600",
                title: "Cadeira Superior",
                description: "Ocupação por ordem de chegada. Acesso pelas Rampas 2 e 4.",
                tickets: [
                    {
                        id: "cadeira-sup-solidario",
                        name: "Cadeira Superior (Solidário)",
                        lote: "2. LOTE + 1KG DE ALIMENTO",
                        price: 70.15,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "cadeira-sup-meia",
                        name: "Cadeira Superior (Meia)",
                        lote: "2. LOTE",
                        price: 60.15,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "cadeira-sup-inteira",
                        name: "Cadeira Superior (Inteira)",
                        lote: "2. LOTE",
                        price: 120.15,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            }

        ]
    },

    {
        ...baseEvent,
        id: "manifesto-pr",
        imageSrc: "/show_pr.jpg",
        bg_ticket: "/tickets/bg_ticket_pr.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Porto Alegre",
        location: "PORTO ALEGRE/RS",
        city: "Estádio Beira-Rio",
        locationImage: "/locations/location_show_pr.jpg",
        date: "26/09/2026",

        sectors: [
            {
                id: "pista-curitiba",
                color: "bg-[#e5e7eb]", // Cor clara conforme a imagem
                title: "Pista",
                description: "",
                tickets: [
                    {
                        id: "pista-solidaria-pr",
                        name: "Pista (Solidária)",
                        lote: "6. LOTE + 1KG DE ALIMENTO",
                        price: 204.00,
                        saibaMais: true,
                        esgoted: true // Conforme imagem
                    }
                ]
            },
            {
                id: "camarote-curitiba",
                color: "bg-[#2dd4bf]", // Cor teal/ciano conforme imagem
                title: "Camarote",
                description: "",
                tickets: [
                    {
                        id: "camarote-solidario-pr",
                        name: "Camarote (Solidária)",
                        lote: "5. LOTE + 1KG DE ALIMENTO",
                        price: 340.00,
                        saibaMais: true,
                        esgoted: false // Conforme imagem
                    }
                ]
            },
            {
                id: "premium-open-bar-curitiba",
                color: "bg-red-500",
                title: "Premium Open Bar +18",
                description: "Open Bar: Vodka, Gin, Cerveja, Água, Refrigerante e Tônica.",
                tickets: [
                    {
                        id: "premium-meia-pr",
                        name: "Premium Open Bar (Meia)",
                        lote: "6. LOTE",
                        price: 120.00,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "premium-solidario-pr",
                        name: "Premium Open Bar (Solidária)",
                        lote: "6. LOTE + 1KG DE ALIMENTO",
                        price: 220.00,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "premium-inteira-pr",
                        name: "Premium Open Bar (Inteira)",
                        lote: "6. LOTE",
                        price: 420.00,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "stage-floor-curitiba",
                color: "bg-yellow-500",
                title: "Stage Floor +18",
                description: "Open Food: Churrasco com serviço das 19:00 às 23:00. Open Bar: Vodka Premium, Gin Premium, Whisky Premium, Cerveja, Água, Refrigerante, Tônica e Energético.",
                tickets: [
                    {
                        id: "stage-floor-meia-pr",
                        name: "Stage Floor (Meia)",
                        lote: "4. LOTE",
                        price: 329.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "stage-floor-solidario-pr",
                        name: "Stage Floor (Solidária)",
                        lote: "4. LOTE + 1KG DE ALIMENTO",
                        price: 429.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "stage-floor-inteira-pr",
                        name: "Stage Floor (Inteira)",
                        lote: "4. LOTE",
                        price: 529.90,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            }
        ]
    },

    {
        ...baseEvent,
        id: "manifesto-ba",
        imageSrc: "/show_ba.png",
        bg_ticket: "/tickets/bg_ticket_ba.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Salvador",
        location: "SALVADOR/BA",
        city: "Arena Fonte Nova",
        locationImage: "/locations/location_show_ba.jpg",
        date: "29/08/2026",

        sectors: [
            {
                id: "arena-salvador",
                color: "bg-[#b8cc81]",
                title: "Arena",
                description: "",
                tickets: [
                    {
                        id: "arena-solidaria-ba",
                        name: "Arena (Solidária)",
                        lote: "2 LOTE + 1KG DE ALIMENTO",
                        price: 90.00,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arena-meia-ba",
                        name: "Arena (Meia)",
                        lote: "2 LOTE",
                        price: 80.00,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "arena-inteira-ba",
                        name: "Arena (Inteira)",
                        lote: "2 LOTE",
                        price: 160.00,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "arena-pcd-ba",
                        name: "Arena (PCD)",
                        lote: "2 LOTE",
                        price: 80.00,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "area-vip-salvador",
                color: "bg-[#f0568a]", // Rosa vibrante conforme imagem
                title: "Área VIP",
                description: "",
                tickets: [
                    {
                        id: "area-vip-solidaria-ba",
                        name: "Área VIP (Solidária)",
                        lote: "6 LOTE + 1KG DE ALIMENTO",
                        price: 230.90,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "area-vip-meia-ba",
                        name: "Área VIP (Meia)",
                        lote: "6 LOTE",
                        price: 220.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "area-vip-inteira-ba",
                        name: "Área VIP (Inteira)",
                        lote: "6 LOTE",
                        price: 440.90,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "area-vip-pcd-ba",
                        name: "Área VIP (PCD)",
                        lote: "6 LOTE",
                        price: 220.90,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "open-bar-salvador",
                color: "bg-[#6d4da3]",
                title: "Open Bar +18",
                description: "Open Bar de Cerveja, Vodka, Gin, Água Tônica, Refrigerante e Água.",
                tickets: [
                    {
                        id: "open-bar-unico-ba",
                        name: "Open Bar (Único)",
                        lote: "4 LOTE",
                        price: 320.00,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "front-plus-salvador",
                color: "bg-[#a674a6]",
                title: "Front +18",
                description: "Open Bar de Cerveja, Vodka, Whisky 12 anos, Gin, Energético, Suco, Refrigerante, Tônica e Água.",
                tickets: [
                    {
                        id: "front-unico-ba",
                        name: "Front (Único)",
                        lote: "4 LOTE",
                        price: 225.99,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "front-pcd-ba",
                        name: "Front (PCD)",
                        lote: "4 LOTE",
                        price: 225.99,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            }
        ]

    },

    {
        ...baseEvent,
        id: "manifesto-ce",
        imageSrc: "/show_ce.jpg",
        bg_ticket: "/tickets/bg_ticket_ce.png",
        bg_color: "#141414",
        title: "Manifesto Musical - Fortaleza",
        location: "FORTALEZA/CE",
        city: "Arena Castelão",
        locationImage: "/locations/location_show_ce.jpg",
        date: "05/09/2026",

        sectors: [
            {
                id: "pista-premium-fortaleza",
                color: "bg-[#8cc63f]", // Verde conforme imagem
                title: "Pista Premium",
                description: "",
                tickets: [
                    {
                        id: "pista-premium-solidaria-ce",
                        name: "Pista Premium (Solidária)",
                        lote: "5 LOTE + 1KG DE ALIMENTO",
                        price: 240.90,
                        saibaMais: true,
                        esgoted: true
                    }
                ]
            },
            {
                id: "front-open-fortaleza",
                color: "bg-[#00aeef]", // Azul conforme imagem
                title: "Front Open +18",
                description: "Open Bar: Whisky, Vodka, Gin, Cerveja, Refrigerante e Água.",
                tickets: [
                    {
                        id: "front-open-solidaria-ce",
                        name: "Front Open (Solidária)",
                        lote: "5 LOTE + 1KG DE ALIMENTO",
                        price: 390.00,
                        saibaMais: true,
                        esgoted: true // Conforme imagem
                    }
                ]
            },
            {
                id: "arquibancada-inferior-fortaleza",
                color: "bg-[#c1272d]", // Vermelho escuro conforme imagem
                title: "Arquibancada Inferior",
                description: "",
                tickets: [
                    {
                        id: "arq-inferior-solidaria-ce",
                        name: "Arquibancada Inferior (Solidária)",
                        lote: "4 LOTE + 1KG DE ALIMENTO",
                        price: 249.40,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arq-inferior-meia-ce",
                        name: "Arquibancada Inferior (Meia)",
                        lote: "4 LOTE",
                        price: 249.40,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "arq-inferior-inteira-ce",
                        name: "Arquibancada Inferior (Inteira)",
                        lote: "4 LOTE",
                        price: 280.80,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            },
            {
                id: "arquibancada-superior-fortaleza",
                color: "bg-[#1a1a1a]", // Preto conforme imagem
                title: "Arquibancada Superior",
                description: "",
                tickets: [
                    {
                        id: "arq-superior-solidaria-ce",
                        name: "Arquibancada Superior (Solidária)",
                        lote: "2 LOTE + 1KG DE ALIMENTO",
                        price: 55.00,
                        saibaMais: true,
                        esgoted: false
                    },
                    {
                        id: "arq-superior-meia-ce",
                        name: "Arquibancada Superior (Meia)",
                        lote: "2 LOTE",
                        price: 55.00,
                        saibaMais: false,
                        esgoted: false
                    },
                    {
                        id: "arq-superior-inteira-ce",
                        name: "Arquibancada Superior (Inteira)",
                        lote: "2 LOTE",
                        price: 110.00,
                        saibaMais: false,
                        esgoted: false
                    }
                ]
            }
        ]
    },



]
