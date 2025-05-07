import Layout from "@/components/shared/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export default function App({ Component, pageProps}: AppProps){
    return(
        <div className={roboto.className}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            
        </div>
    )
}