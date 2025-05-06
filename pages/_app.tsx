import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export default function App({ Component, pageProps}: AppProps){
    return(
        <div className={roboto.className}>
            <Component {...pageProps} />
        </div>
    )
}