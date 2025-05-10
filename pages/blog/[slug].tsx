import BlogDetail from "@/components/blog/BlogDetail";
import { useRouter } from "next/router";


export default function BlogSingle (){
    const router = useRouter();
    const { slug } = router.query;

    return(
        <>
            <BlogDetail slug={String(slug)}/>
        </>
    )
}