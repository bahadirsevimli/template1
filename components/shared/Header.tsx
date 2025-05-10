import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/router";
import InfoBarMobile from "../home/InfoBarMobile";


const Header: FC<any> = () => {

    const router = useRouter();

    return(
        <>

            <header className="bg-cloudBurst w-full sm:sticky sm:top-0 flex justify-between sm:px-15 px-5 py-5 items-center tracking-wide z-1">

                {/* logo section */}
                <div className="w-20 sm:w-40 cursor-pointer">
                    <Image
                    src="/images/logo.jpg"
                    alt="logo"
                    width={150}
                    height={100}
                    style={{ maxWidth: "100%", height: "auto"}}
                    onClick={() => router.push("/")}
                    />
                </div>

                {/* navigation links */}
                <nav className="font-semibold sm:flex hidden gap-8 text-tahunaSands text-lg items-center ml-auto">
                    <Link href="/about" className="hover:text-gray-300">
                        Hakkımızda
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        Tedaviler
                    </Link>
                    <Link href="/blog" className="hover:text-gray-400">
                        Sağlık Köşesi
                    </Link>
                    <Link href="/gallery" className="hover:text-gray-400">
                        Galeri
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400">
                        İletişim
                    </Link>
                    <Link href="/getoffer" className="border px-4 py-3 rounded-md text-cloudBurst text-md bg-tahunaSands hover:bg-cloudBurst hover:text-tahunaSands">
                        <p  className="font-light">
                            Ücretsiz Teklif Al
                        </p>
                    </Link>
                    
                </nav>

                <SidebarMobile/>
                

            </header>
        
        </>
    )

}

const SidebarMobile = () => {

    const [ isNavShown, setIsNavShown] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const closeSidebar = () => {
        setIsNavShown((prev) => !prev)
    }

    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
       if(sidebarRef.current && !sidebarRef.current.contains(e.target as Node)){closeSidebar()}
        };
        document.addEventListener("mousedown", handleClickOutside);
        return() => document.removeEventListener("mousedown", handleClickOutside);
    }, [])
    


    return(
        <div>
            <div className="sm:hidden block">
                <button onClick={closeSidebar}>
                <CiMenuFries color="white" size={30}/>
                </button>
            </div>
            {isNavShown && (
                <div
                ref={sidebarRef} 
                className="bg-kashmirBlue text-cloudBurst rounded-3xl rounded-e-none w-64 fixed top-0 right-0 h-full transition-transform duration-300 p-5 text-sm flex flex-col gap-7 z-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <Image
                            src="/images/logo.jpg"
                            alt="logo"
                            width={150}
                            height={100}
                            style={{ maxWidth: "100%", height: "auto"}}
                            onClick={() => {
                                router.push("/");
                                closeSidebar();
                            }}
                            />
                         </div>
                        <button onClick={closeSidebar}>
                            <FaXmark size={20}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                         <Link href="/" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                        ANA SAYFA
                        </Link>
                        <Link href="/about" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                            HAKKIMIZDA
                        </Link>
                        <Link href="/" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                            TEDAVİLER
                        </Link>
                        <Link href="/blog" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                            SAĞLIK KÖŞESİ
                        </Link>
                        <Link href="/gallery" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                            GALERİ
                        </Link>
                        <Link href="/contact" onClick={closeSidebar} className="border-b border-white p-2 font-bold">
                            İLETİŞİM
                        </Link>
                    </div>
                   <div>
                    <InfoBarMobile/>
                   </div>

                    
                </div>
            )}
        </div>
        
    )

}

export default Header;