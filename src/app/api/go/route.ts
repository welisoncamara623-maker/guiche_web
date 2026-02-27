import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url)

    const utms = new URLSearchParams(searchParams)

    const DESTINO_BASE = "https://siteoficial.com/show" // pode trocar para URL externa 

    const destino = new URL(DESTINO_BASE, origin)

    utms.forEach((value, key) => {
        destino.searchParams.set(key, value)
    })

    return NextResponse.redirect(destino, {
        status: 302,
    })
}