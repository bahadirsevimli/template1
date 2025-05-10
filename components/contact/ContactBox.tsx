import { FC } from "react";
import { CiMail } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";


const ContactBox: FC<any> = () => {

    return(
        <>
            <div className="bg-kashmirBlue text-tahunaSands sm:rounded-md grid sm:grid-cols-3 grid-cols-1 sm:gap-0 gap-10 p-8 mx-auto max-w-[1300px]">
                <div className="flex flex-col items-center sm:gap-3 gap-1">
                    <TfiWorld size={60}/>
                    <h2 className="mt-5 font-bold sm:text-3xl text-xl">Adres</h2>
                    <p className="text-center">Lorem ipsum dolor sit ametipsum dolor sit amet İstanbul/Türkiye</p>
                </div>
                <div className="flex flex-col items-center sm:gap-3 gap-1">
                    <PiPhoneCallLight size={60}/>
                    <h2 className="mt-5 font-bold sm:text-3xl text-xl">Telefon</h2>
                    <p className="text-center">0 (000) 000 00 00</p>
                </div>
                <div className="flex flex-col items-center sm:gap-3 gap-1">
                    <CiMail size={60}/>
                    <h2 className="mt-5 font-bold sm:text-3xl text-xl">Email</h2>
                    <p className="text-center">test@test.com</p>
                </div>
            </div>
        </>
    )
}

export default ContactBox;