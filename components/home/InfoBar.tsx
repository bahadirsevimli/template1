import Link from "next/link";
import { FC } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";


const InfoBar: FC<any> = () => {

return(
    <>
        <div className="bg-nepal justify-between items-center sm:flex hidden font-light max-h-[43px] min-w-[986px]">
            <Link href="tel:05433212121" className="flex gap-3 bg-tahunaSands px-4 py-1 items-center text-cloudBurst hover:underline">
                <PiPhoneCallLight size={35}/>
                <p>Bize Ulaşın</p>
                <p>
                    0 (543) 321 21 21
                </p>
            </Link>
            <div className="pr-4 flex gap-10 text-white items-center">
                <Link href="/contact" className="flex gap-3 hover:text-gray-500">
                    <TfiWorld size={25} color="white"/>
                    <p>
                        Lorem ipsum dolor sit ametipsum dolor sit amet İstanbul/Türkiye
                    </p>
                </Link>
                <p className="text-3xl font-extralight">|</p>
                <Link href="mailto:test@test.com" className="flex items-center gap-3 hover:text-gray-500">
                    <CiMail size={25} color="white"/>
                    <p>
                        test@test.com
                    </p>
                </Link>
                <div className="flex gap-3">
                    <Link href="/"><FaFacebookSquare size={30} color="white"/></Link>
                    <Link href="/"><FaTwitterSquare size={30} color="white"/></Link>
                    <Link href="/"><FaInstagramSquare size={30} color="white"/></Link>
                    <Link href="/"><FaYoutubeSquare size={30} color="white"/></Link>
                    <Link href="/"><FaLinkedin size={30} color="white"/></Link>
                </div>
            </div>
        </div>
    </>
)
}
export default InfoBar;