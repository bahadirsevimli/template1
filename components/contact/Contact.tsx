import { FC } from "react";
import ContactBox from "./ContactBox";
import MapLocation from "./MapLocation";
import GetContactForm from "../shared/forms/GetContactForm";


const Contact: FC<any> = () => {

    return(
        <>
            <div className="flex flex-col mx-auto sm:pt-20 sm:gap-8 bg-nepal text-white">
                <div className="flex flex-col gap-5 px-2 sm:py-5 py-10">
                    <h1 className="text-center font-bold sm:text-5xl text-2xl">İLETİŞİM BİLGİLERİ</h1>
                    <p className="text-center font-light sm:text-base text-sm">Şirketimize ulaşım sağlamak için iletişim formunu bu alandan boş bırakmadan bize ulaşabilirsiniz..</p>
                </div>
                <div>
                    <ContactBox/>
                </div>
                <div>
                    <MapLocation/>
                </div>
                <div>
                    <GetContactForm/>
                </div>
            </div>
        </>
    )
}

export default Contact;