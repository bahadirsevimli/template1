import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

interface ImagePopupProps {
    imageurl: string;
    onClose: () => void;
}

const ImagePopup: FC<ImagePopupProps> = ({imageurl, onClose}) => {

    const [show, setShow] = useState(false);

    useEffect(() => { setShow(true) },[]);

    return(
        <>
        <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 flex justify-center items-center transition-opacity ${show ? "opacity-100" : "opacity-0"} duration-700 z-50`}>
            <div className={`relative transition-transform duration-700 ${show ? "scale-100" : "scale-95"}`}>
                <button 
                className="absolute top-2 right-2"
                onClick={onClose}>
                    <FaXmark size={20}/>
                </button>
                <Image
                src={imageurl}
                alt="image"
                width={1000}
                height={500}
                className="rounded-2xl shadow-lg"
                />
            </div>
        </div>
        </>
    )
}
export default ImagePopup;