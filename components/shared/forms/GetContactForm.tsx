import Link from "next/link";
import { FC } from "react";


const GetContactForm: FC<any> = () => {

    return(
        <>
            <div className="text-white flex flex-col items-center sm:pt-10 pt-10 sm:pb-10 pb-0 gap-5">
                <h2 className="sm:text-4xl text-2xl text-center">Ücretsiz muayene hakkınız için bizimle iletişime geçebilirsiniz!</h2>
                <p className="sm:text-2xl text-base text-center">Dilerseniz bize form bırakarak ya da iletişim numaramızdan bizi arayarak randevu oluşturabilirsiniz.</p>
                
                {/* FORM inputlarda ref yok button da onclick yok */}
                <div className=" bg-kashmirBlue flex flex-col bg-obsidian dark:bg-obsidian_dark py-8 px-8 sm:rounded-xl w-full shadow-lg sm:w-2/3 mt-6">
                    <h1 className="text-xl font-bold ">Bize Mesaj Gönderin</h1>

                    {/* Ad + Soyad */}
                    <div className="flex mt-5 flex-col sm:flex-row w-full gap-4">
                        <div className="flex flex-col w-full">
                            <span className="text-sm">Adınız *</span>
                            <input
                                
                                type="text"
                                className="text-black dark:text-white bg-white dark:bg-slate-800 border dark:border-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purplehaze"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-white text-sm">Soyadınız *</span>
                            <input
                                type="text"
                                className="text-black dark:text-white bg-white dark:bg-slate-800 border dark:border-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purplehaze"
                            />
                        </div>
                    </div>

                        {/* Email */}
                    <div className="flex flex-col w-full mt-4">
                            <span className="text-white text-sm">Email adresi *</span>
                            <input
                            
                            type="text"
                            className="text-black dark:text-white bg-white dark:bg-slate-800 border dark:border-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purplehaze"
                            />
                    </div>

                        {/* Telefon */}
                    <div className="flex flex-col w-full mt-4">
                            <span className="text-sm">Telefon no *</span>
                            <input
                            
                            type="text"
                            className="text-black dark:text-white bg-white dark:bg-slate-800 border dark:border-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purplehaze"
                            />
                    </div>

                        {/* Mesaj */}
                    <div className="flex flex-col w-full mt-4">
                            <span className="text-sm">Mesajınız *</span>
                            <textarea
                            
                            rows={5}
                            className="text-black dark:text-white bg-white dark:bg-slate-800 border dark:border-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purplehaze"
                            ></textarea>
                    </div>

                        {/* Gizlilik */}
                    <div className="flex flex-row w-full mt-4 gap-2">
                            <input type="checkbox" id="checkbox_id" className="accent-purplehaze_hover" />
                            <label htmlFor="checkbox_id" className="text-sm tracking-wide cursor-pointer">
                            <Link className="text-purplehaze hover:text-purplehaze_hover" href={"/website/privacy"}>
                                Gizlilik Politikası
                            </Link>
                            'nı okudum ve kabul ediyorum.
                            </label>
                    </div>

                        {/* Buton */}
                    <button
                        className="self-start mt-5 border px-3 py-1 rounded-md"
                        >
                        <span className="text-sm">Gönder</span>
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default GetContactForm;