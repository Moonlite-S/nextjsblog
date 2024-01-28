import { useRouter } from "next/router";
    
export default function GenericBlog () {
    const router = useRouter();

    const goToPost = ({id} : {id:string}) => {
    router.push(`/Blogs/${id}`);
}

    return (
        <div>
            <h1>Generic Blog</h1>
            <h1>{router.query.id}</h1>
            <button onClick={() => goToPost({id: '121'})}>Next</button>
        </div>
    )
}