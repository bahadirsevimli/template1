import Image from "next/image";
import { FC } from "react";
import data from "@/data/blogDetail";


const BlogDetail: FC<{ slug: string }> = ({ slug }) => {



    return(
        <>
            <div className="flex flex-col sm:py-10 py-5 sm:gap-10 gap-5 items-center">
                <div className="flex flex-col justify-center sm:gap-5 gap-2">
                    <h1 className="text-center sm:text-6xl text-2xl font-bold">{slug}</h1>
                    <p className="text-center font-light sm:text-base text-xs">12.01.2001</p>
                    <Image
                    src="/images/banner1.jpg"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="mx-auto"
                    />
                </div>
               <div className="w-[80%] flex flex-col gap-6">
                    <h2 className="sm:text-4xl text-xl font-semibold">{data.baslik}</h2>
                    <p className="sm:text-base text-sm">{data.baslikicerik}</p>
                    <h3 className="sm:text-3xl text-base font-semibold">{data.altbaslik1}</h3>
                    <p className="sm:text-base text-sm">{data.icerik1}</p>
                    <h3 className="sm:text-3xl text-base font-semibold">{data.altbaslik2}</h3>
                    <p className="sm:text-base text-sm">{data.icerik2}</p>
               </div>
              

            </div>
        </>
    )
}

export default BlogDetail;