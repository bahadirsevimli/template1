import { FC } from "react";
import Image from "next/image";
import exampleData from "@/data/footerData";
import Link from "next/link";


const Footer: FC<any> = () => {

    


    return(
        <>
            <footer className="bg-cloudBurst w-full p-14 grid grid-cols-2 md:grid-cols-5 gap-6 text-white sm:text-lg text-xs">
                <div className="md:flex hidden flex-col gap-3">
                    {/* logo section */}
                    <div>
                        <Image
                        src="/images/logo.jpg"
                        alt="logo"
                        width={180}
                        height={100}
                         />
                    </div>
                    <div>
                        <p className="text-tahunaSands">Tüm implant uygulamaları ve diş ihtiyaçlarınız kliniğimizde yapılmaktadır.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:gap-4 gap-2">
                    <h3 className="font-semibold sm:text-2xl text-lg">Kurumsal</h3>
                    <div className="flex flex-col gap-1 font-light">
                          {exampleData.kurumsal.map((a, index) => (
                        <Link key={index} href="/">
                            {a}
                        </Link>
                         ))}
                    </div>
                  
                </div>
                <div className="flex flex-col sm:gap-4 gap-2">
                    <h3 className="font-semibold sm:text-2xl text-lg">Tedaviler</h3>
                    <div className="flex flex-col gap-1 font-light">
                         {exampleData.tedaviler.map((a, index) => (
                        <Link key={index} href="/">
                            {a}
                        </Link>
                          ))}
                    </div>
                   
                </div>
                <div className="flex flex-col sm:gap-4 gap-2">
                    <h3 className="font-semibold sm:text-2xl text-lg">Sağlık Köşesi</h3>
                    <div className="flex flex-col gap-1 font-light">
                        {exampleData.saglikKosesi.map((a, index) => (
                        <Link key={index} href="/">
                            {a}
                        </Link>
                         ))}
                    </div>
                    
                </div>
                <div className="flex flex-col sm:gap-4 gap-2">
                    <h3 className="font-semibold sm:text-2xl text-lg">İletişim</h3>
                    <div className="flex flex-col gap-1 font-light">
                         {exampleData.iletisim.map((a, index) => (
                        <Link key={index} href="/">
                            {a}
                            
                        </Link>
                    ))}
                    </div>
                   
                </div>
                
                
            </footer>
        </>
    )
}
export default Footer;