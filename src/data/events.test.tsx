export const EVENTS = [
    {
        id: "manifesto-goiania",
        imageSrc: "/show_go.jpg",
        bg_ticket: "/tickets/bg_ticket_go.png",
        bg_color: "#0c0361",

        title: "Manifesto Musical - Goiânia",
        subtitle:
            "MANIFESTO MUSICAL TURNÊ 2026: PORQUE ALGUNS ENCONTROS PRECISAM ACONTECER AO VIVO!",

        location: "GÔIANIA/GO",
        city: "Estádio Serra Dourada",
        time: "14:00H",
        locationImage: "/locations/location_show_go.jpg",
        date: "02/05/2026",

        // ✅ SOBRE
        about: [
            "A primeira dupla sertaneja a esgotar ingressos no Maracanã/RJ...",
            "A turnê nasceu após três apresentações com ingressos esgotados no Allianz Parque...",
            "A proposta do Manifesto Musical vai além da música...",
            "Prepare-se para uma apresentação histórica..."
        ],

        // ✅ FAQ
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

        // ✅ INFORMAÇÕES IMPORTANTES
        importantInfo: [
            "Este evento poderá ser gravado, filmado ou fotografado.",
            "É proibida a entrada com copos, latas, cadeiras, objetos cortantes, drones, entre outros.",
            "Cuide dos seus pertences.",
            "Chegue cedo, evite filas e divirta-se."
        ],

        // ✅ CONTATO
        contact: {
            email: "sac@guicheweb.com.br",
            phones: [
                "(11) 4765-6655 – São Paulo",
                "(21) 4042-3944 – Rio de Janeiro"
            ],
            serviceHours:
                "Segunda a sexta, das 8h às 18h (exceto feriados)"
        },

        // 🎟️ SETORES (COLLAPSES)
        sectors: [
            {
                id: "premium",
                color: "bg-yellow-500",
                title: "Premium - Open Bar +18",
                description:
                    "Open Bar: Gin, vodka, whisky 08 anos, cerveja, água e refrigerante.",

                tickets: [
                    {
                        id: "premium-solidaria",
                        name: "Premium (Solidária)",
                        lote: "3º LOTE + 1KG DE ALIMENTO",
                        price: 540,
                        saibaMais: true,
                    },
                    {
                        id: "premium-meia",
                        name: "Premium (Meia)",
                        lote: "3º LOTE",
                        price: 540,
                        info: true,
                    },
                    {
                        id: "premium-inteira",
                        name: "Premium (Inteira)",
                        lote: "3º LOTE",
                        price: 1080,
                    },
                ],
            },

            {
                id: "camarote",
                color: "bg-purple-600",
                title: "Camarote Alô Inveja - Open Bar e Open Food +18",
                description:
                    "Open Bar Premium + Open Food: comidas típicas, petiscos e muito mais.",

                tickets: [
                    {
                        id: "camarote-solidaria",
                        name: "Camarote (Solidária)",
                        lote: "1º LOTE",
                        price: 900,
                    },
                    {
                        id: "camarote-inteira",
                        name: "Camarote (Inteira)",
                        lote: "1º LOTE",
                        price: 1500,
                    },
                ],
            },

            {
                id: "extra-vip",
                color: "bg-blue-500",
                title: "Extra VIP - Open Bar +18",
                description:
                    "Open Bar: Cerveja, água e refrigerante.",

                tickets: [
                    {
                        id: "vip-solidaria",
                        name: "Extra VIP (Solidária)",
                        lote: "1º LOTE",
                        price: 600,
                    },
                    {
                        id: "vip-inteira",
                        name: "Extra VIP (Inteira)",
                        lote: "1º LOTE",
                        price: 950,
                    },
                ],
            },
        ],
    },


]
