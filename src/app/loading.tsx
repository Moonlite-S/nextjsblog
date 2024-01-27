'use client'

import { useEffect } from "react"

export default function Loading() {
    useEffect(() => {
        const timeDelay = setTimeout(() => console.log('Delay Inbound'), 2000);
        return () => clearTimeout(timeDelay);
    }, []);

    return(
        <div>
            <h1>
                Loading
            </h1>
        </div>
    )
}