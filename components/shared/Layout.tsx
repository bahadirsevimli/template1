import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InfoBar from "../home/InfoBar";


export default function Layout({ children }: { children: ReactNode }){
    return(
        <>
            <InfoBar/>
            <Header/>
            <main className="mx-auto bg-nepal">{children}</main>
            <Footer/>
        </>
    )
}