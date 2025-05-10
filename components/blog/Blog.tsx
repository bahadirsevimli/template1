import Link from "next/link";
import { FC } from "react";
import Image from "next/image";


const Blog: FC<any> = () => {

    return(
        <>
            <div className="flex flex-col p-10 text-black gap-10">
                <h1 className="font-bold text-5xl">Sağlık Köşesi</h1>
                <div className="grid sm:grid-cols-3 gap-20 grid-cols-1">


                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme1">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>
                    

                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme2">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>

                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme3">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>


                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme4">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>

                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme5">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>

                    <div className="flex flex-col sm:gap-3 gap-2">
                        <Image
                         src="/images/banner1.jpg"
                         alt="blog"
                         width={1200}
                         height={200}
                        />
                        <p className="font-light text-sm">12.01.2001</p>
                        <Link href="/blog/dis-curugu-onleme6">
                            <h2 className="sm:text-3xl text-xl font-semibold hover:text-gray-600">Diş Çürüğü Önleme İpuçları</h2>
                        </Link>
                        <p className="text-sm">Diş çürüğü önleme, kalıcı ağız sağlığının anahtarıdır. Istanbul Dental Akademi’nin uzman tavsiyeleriyle dişlerinizi güçlü tutmanın kanıtlanmış yollarını keşfedin.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;