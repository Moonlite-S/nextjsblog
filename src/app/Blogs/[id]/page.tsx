import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

type Repo = {
    RepoName: string;
    README: string;
    Date: number;
}

async function BlogData ({params} : {params: {id: string}}) {
    unstable_noStore();
    const res = await fetch('https://raw.githubusercontent.com/Moonlite-S/VertBot/main/README.md');
    const RepoDesc = await res.text();
    
    const Repo : Repo = {
        RepoName: 'VertBot',
        README: RepoDesc,
        Date: 0
    }

    return (
        <div>
            <h1>{Repo.RepoName}</h1>

            <p>Blog ID: {params.id}</p>
            <p>{Repo.README}</p>
            <p>{Repo.Date}</p>
        </div>
    )
}

export default async function Pages() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogData params={{id: '1232'}}/>
            </Suspense>

        </>
    )
}