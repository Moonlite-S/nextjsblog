'use client'

import { useEffect } from "react"

export default function Loading() {
    useEffect(() => {
        const timeDelay = setTimeout(() => console.log('Delay Inbound'), 2000);
        return () => clearTimeout(timeDelay);
    }, []);

    return(
        <div className="mx-auto container" style={{backgroundImage: 'url(https://webstockreview.net/images/clipart-coffee-smoke-15.png)'}}>
        <button type='button' className="bg-blue-200">
            <svg className="animate-spin h-5 w-5 mr-3 mx-auto" viewBox="0 0 50 50">
                <circle className="stroke-current text-green-500" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
            </svg>
            <h1>Loading</h1>
        </button>
        </div>
    )
}