import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/router";


const Header: FC<any> = () => {

    const router = useRouter();

    return(
        <>

            <header className="bg-cloudBurst w-full sm:sticky sm:top-0 flex justify-between sm:px-15 px-5 py-5 items-center tracking-wide">

                {/* logo section */}
                <div className="sm:w-auto w-20 cursor-pointer">
                    <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={150}
                    height={100}
                    style={{ maxWidth: "100%", height: "auto"}}
                    onClick={() => router.push("/")}
                    />
                </div>

                {/* navigation links */}
                <nav className="font-semibold sm:flex hidden gap-8 text-tahunaSands text-lg items-center">
                    <Link href="/">
                        Hakkımızda
                    </Link>
                    <Link href="/">
                        Tedaviler
                    </Link>
                    <Link href="/">
                        Sağlık Köşesi
                    </Link>
                    <Link href="/">
                        Galeri
                    </Link>
                    <Link href="/">
                        İletişim
                    </Link>
                    <button className="border px-4 py-5 rounded-md text-cloudBurst text-xl bg-tahunaSands">
                        <Link href="/" className="font-light">
                            Ücretsiz Teklif Al
                        </Link>
                    </button>
                    
                </nav>

                <SidebarMobile/>
                

            </header>
        
        </>
    )

}

const SidebarMobile = () => {

    const [ isNavShown, setIsNavShown] = useState<boolean>(false);

    const closeSidebar = () => {
        setIsNavShown((prev) => !prev)
    }

    const router = useRouter();

    return(
        <div>
            <div className="sm:hidden block">
                <button onClick={closeSidebar}>
                <CiMenuFries color="white" size={30}/>
                </button>
            </div>
            {isNavShown && (
                <div className="bg-kashmirBlue text-cloudBurst rounded-3xl rounded-e-none w-64 fixed top-0 right-0 h-full transition-transform duration-300 p-5 text-sm flex flex-col gap-7">
                    <div className="flex justify-between items-start">
                        <div>
                            <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={150}
                            height={100}
                            style={{ maxWidth: "100%", height: "auto"}}
                            onClick={() => router.push("/")}
                            />
                         </div>
                        <button onClick={closeSidebar}>
                            <FaXmark size={20}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                         <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                        ANA SAYFA
                        </Link>
                        <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                            HAKKIMIZDA
                        </Link>
                        <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                            TEDAVİLER
                        </Link>
                        <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                            SAĞLIK KÖŞESİ
                        </Link>
                        <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                            GALERİ
                        </Link>
                        <Link href="/" className="border-b border-b-gray-700 p-2 font-bold">
                            İLETİŞİM
                        </Link>
                    </div>
                   

                    
                </div>
            )}
        </div>
        
    )

}

export default Header;