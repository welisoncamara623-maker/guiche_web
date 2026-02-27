import { Login } from "@/components/user/login/login";
import { Suspense } from "react";

export default function LoginPage() {
    return (
        <Suspense>
            <main>
                <Login />
            </main>
        </Suspense>
    );
}