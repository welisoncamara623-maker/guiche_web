import { Register } from "@/components/user/regiser/register";
import { Suspense } from "react";

export default function RegisterPage() {
    return (
        <Suspense>
            <main>
                <Register />
            </main>
        </Suspense>
    )
}