import { FC } from "react"
import Image from "next/image";


const About: FC<any> = () => {

    return(
        <>
            <div className="bg-kashmirBlue sm:py-20 sm:px-10 text-tahunaSands flex gap-30">
                <div className="flex flex-col gap-4">
                    <h2 className="sm:text-7xl mb-4 font-bold">Hakkımızda</h2>
                    <p>[Klinik Adı], ağız ve diş sağlığı alanında hizmet veren yenilikçi ve güvenilir bir sağlık kuruluşudur. Misyonumuz, hastalarımıza kaliteli, modern ve sürdürülebilir tedavi çözümleri sunarak beklentilerini aşmak ve onların yaşam kalitesine değer katmaktır.</p>
                    <h3 className="sm:text-3xl font-semibold">Biz Kimiz?</h3>
                    <p>[Klinik Adı], [Yıl] yılında kurulmuş olup, [Şehir, Ülke] bölgesinde hizmet vermektedir. Alanında deneyimli ve uzman bir hekim kadrosu ile çalışan kliniğimiz, diş hekimliğindeki en güncel teknolojileri ve modern tedavi yöntemlerini kullanarak her hastamız için en etkili çözümleri sunmaktadır.</p>
                    <h3 className="sm:text-3xl font-semibold">Misyonumuz ve Değerlerimiz</h3>
                    <p>Hasta memnuniyetini her zaman en öncelikli hedefimiz olarak görüyoruz. Her tedavi sürecinde güvenilirlik, hijyen, kalite ve profesyonellik ilkeleriyle hareket ediyor; hastalarımızın ihtiyaçlarını anlayarak onlara en uygun tedavi planlarını sunuyoruz.</p>
                </div>
                <div>
                    <Image
                    src="/images/aboutImg.jpg"
                    alt="about image"
                    width={1000}
                    height={300}
                    />
                </div>
            </div>
        </>

    )
}

export default About;