import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const bannerImages = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg"
    ]

const BannerSlider: FC<any> = () => {

    

    const settingsSlider = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }

    return(
        <>
            <div className="relative w-full sm:h-[700px] h-[500px] text-white font-bold tracking-widest">
                <Slider {...settingsSlider}>
                {bannerImages.map((src, index) => (
                    <div key={index} className="relative w-full sm:h-[700px] h-[500px]">
                        <Image
                        src={src}
                        alt="banner"
                        fill
                        className="object-cover brightness-50"
                        />
                        <div className="relative  sm:px-30 sm:py-40 px-10 py-20 flex flex-col sm:gap-5 gap-2">
                            <h1 className="sm:text-base text-xs">İstanbul Diş Akademisi</h1>
                            <p className="sm:text-7xl text-4xl">Gülüşünüz ile göz kamaştırın.</p>
                            <Link 
                            href="/getoffer" 
                            className="rounded-lg sm:p-5 p-2 text-cloudBurst sm:text-base text-xs bg-tahunaSands sm:w-60 w-40 sm:mt-0 mt-10 hover:bg-gray-400">
                                Randevu İçin Tıklayın
                            </Link>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
       
        </>
    )
}

export default BannerSlider;