import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <HeroUIProvider>
      <main className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </HeroUIProvider>
  );
}
