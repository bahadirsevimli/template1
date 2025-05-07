import { FC } from "react";
import Image from "next/image";

const Banner: FC<any> = () => {


    return(
        <>
            <div className="relative w-full sm:h-[700px] h-[500px] text-white font-bold tracking-widest">
                <Image
                src="/images/banner.jpg"
                alt="banner"
                fill
                className="object-cover brightness-50"
                />
                <div className="relative sm:px-30 sm:py-40 px-10 py-20 flex flex-col gap-5">
                        <h1 className="sm:text-md text-xs">İstanbul Diş Akademisi</h1>
                        <p className="sm:text-5xl text-2xl">Gülüşünüz ile göz kamaştırın.</p>
                        <button className="rounded-lg sm:p-5 p-2 text-cloudBurst sm:text-md text-sm bg-tahunaSands sm:w-60 w-40">
                            Randevu İçin Tıklayın
                        </button>
                </div>
            </div>
       
        </>
    )
}

export default Banner;