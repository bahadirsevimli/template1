import { FC } from "react";
import Slider from "react-slick";


const SliderSm: FC<any> = () => {

    const settings = {
        dots: true,      
        infinite: true,      
        speed: 500,          
        slidesToShow: 3,     
        slidesToScroll: 1,  
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]         
      };
    
      const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg"
      ];

    

    return(
        <>
            <div className="sm:w-11/12 w-[80%] max-w-6xl mx-auto">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                    <div key={idx} className="px-2">
                        <img
                        src={src}
                        alt="image"
                        className="sm:w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default SliderSm;