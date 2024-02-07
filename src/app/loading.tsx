'use client'

import { TransitionUp } from "@/_components/ClientBlog"

export default function Loading() {
    return(
        <TransitionUp>
            <div className="mx-auto container m-10 p-10 text-center bg-mocha-100">
                <h1 className="font-bold text-2xl">Loading</h1>
            </div>
        </TransitionUp>
    )
}