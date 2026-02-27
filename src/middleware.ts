// middleware.ts
import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookies) =>
                    cookies.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    ),
            },
        }
    )

    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (request.nextUrl.pathname.startsWith("/finalizar-compra") && !session) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("redirect", "/finalizar-compra")
        return NextResponse.redirect(loginUrl)
    }

    return response
}

export const config = {
    matcher: ["/finalizar-compra/:path*"],
}