import { ListCards } from "@/components/event-show/list-cards";
import { Footer } from "@/components/footer/fotter";
import { Header } from "@/components/header/header";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <main>
        <Header />
        <ListCards />
        <Footer />
      </main>
    </Suspense>
  )
}

