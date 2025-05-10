import Link from "next/link";
import { FC } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";


const InfoBarMobile: FC<any> = () => {

    return(
        <>
            <div className="flex flex-col font-light gap-4">
                <Link href="tel:05433212121" className="flex flex-col gap-1 bg-tahunaSands py-1 items-center text-cloudBurst rounded-lg">
                    <div className="flex">
                        <PiPhoneCallLight size={20}/>
                         <p>Bize Ulaşın</p>
                    </div>
                    <p className="hover:underline">
                        0 (543) 321 21 21
                    </p>
                </Link>
                <div className="pr-4 flex flex-col gap-2 text-white">
                    <Link href="/contact" className="flex gap-3">
                        <TfiWorld size={40} color="white"/>
                        <p>
                            Lorem ipsum dolor sit ametipsum dolor sit amet İstanbul/Türkiye
                        </p>
                    </Link>
                    <Link href="mailto:test@test.com" className="flex items-center gap-3">
                        <CiMail size={20} color="white"/>
                        <p>
                            test@test.com
                        </p>
                    </Link>
                    <div className="flex gap-1 mx-auto mt-3">
                        <Link href="/"><FaFacebookSquare size={25} color="white"/></Link>
                        <Link href="/"><FaTwitterSquare size={25} color="white"/></Link>
                        <Link href="/"><FaInstagramSquare size={25} color="white"/></Link>
                        <Link href="/"><FaYoutubeSquare size={25} color="white"/></Link>
                        <Link href="/"><FaLinkedin size={25} color="white"/></Link>
                    </div>
                </div>
            </div>
        </>
    )
    }

    export default InfoBarMobile;