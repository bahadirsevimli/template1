import { FC, useState } from "react";
import Image from "next/image";
import ImagePopup from "./ImagePopup";


const Gallery: FC<any> = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "/images/gallery/ex-1.jpg",
        "/images/gallery/ex-2.jpg",
        "/images/gallery/ex-3.jpg",
        "/images/gallery/ex-4.jpg",
        "/images/gallery/ex-5.jpg",
        "/images/gallery/ex-6.jpg",
        "/images/gallery/ex-7.jpg",
        "/images/gallery/ex-8.jpg",
        "/images/gallery/ex-9.jpg",
      ];

    return(
        <>
            <div className="grid sm:grid-cols-3 grid-cols-1">
                {images.map((img, i) => (
                    <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className="flex justify-center p-7 duration-400 transform-gpu hover:scale-110 cursor-pointer">
                        <Image
                        src={img}
                        alt={img}
                        width={400}
                        height={200}
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImagePopup
                imageurl={selectedImage}
                onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    )

}
export default Gallery;