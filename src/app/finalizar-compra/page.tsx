export const dynamic = "force-dynamic"
import CartContainer from "@/components/checkout/cart-container";
import { HeaderCart } from "@/components/checkout/header-cart";
import { Suspense } from "react";

export default function CheckoutPage() {
    return (
        <Suspense>
            <main className="bg-zinc-200">
                <HeaderCart />
                <CartContainer />
            </main>
        </Suspense>
    )
}