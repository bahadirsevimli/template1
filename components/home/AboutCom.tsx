import { FC } from "react"
import Image from "next/image";


const AboutCom: FC<any> = () => {

    return(
        <>
            <div className="sm:py-20 sm:px-10 py-10 px-5 text-white flex sm:flex-row flex-col sm:gap-30 gap-5">
                <div className="flex flex-col sm:gap-4 gap-1">
                    <h2 className="sm:text-6xl text-2xl mb-4 font-bold">Hakkımızda</h2>
                    <p className="sm:text-base text-sm">[Klinik Adı], ağız ve diş sağlığı alanında hizmet veren yenilikçi ve güvenilir bir sağlık kuruluşudur. Misyonumuz, hastalarımıza kaliteli, modern ve sürdürülebilir tedavi çözümleri sunarak beklentilerini aşmak ve onların yaşam kalitesine değer katmaktır.</p>
                    
                    <h3 className="sm:text-3xl font-semibold mt-4">Biz Kimiz?</h3>
                    <p className="sm:text-base text-sm">[Klinik Adı], [Yıl] yılında kurulmuş olup, [Şehir, Ülke] bölgesinde hizmet vermektedir. Alanında deneyimli ve uzman bir hekim kadrosu ile çalışan kliniğimiz, diş hekimliğindeki en güncel teknolojileri ve modern tedavi yöntemlerini kullanarak her hastamız için en etkili çözümleri sunmaktadır.</p>
                    
                    <h3 className="sm:text-3xl font-semibold mt-4">Misyonumuz ve Değerlerimiz</h3>
                    <p className="sm:text-base text-sm">Hasta memnuniyetini her zaman en öncelikli hedefimiz olarak görüyoruz. Her tedavi sürecinde güvenilirlik, hijyen, kalite ve profesyonellik ilkeleriyle hareket ediyor; hastalarımızın ihtiyaçlarını anlayarak onlara en uygun tedavi planlarını sunuyoruz.</p>
                </div>
                <div className="sm:block hidden">
                    <Image
                    src="/images/aboutImg.jpg"
                    alt="about image"
                    width={1000}
                    height={300}
                    />
                </div>
                <div className="sm:hidden block mx-auto">
                    <Image
                    src="/images/aboutImg.jpg"
                    alt="about image"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </>

    )
}

export default AboutCom;