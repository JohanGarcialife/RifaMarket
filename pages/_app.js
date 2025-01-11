import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
