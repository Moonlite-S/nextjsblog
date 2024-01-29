'use client'

import Link from "next/link";

type BlogProps = {
  URL_Page: string;
  URL_String: string;
  HeaderText: string;
  BodyText: string;
};

export function Blog(
  {URL_Page, URL_String, HeaderText, BodyText}: BlogProps
) {
  return (
    <div className="hover:scale-110 duration-100 ease-in-out bg-mocha-200 h-[400px] border-solid border-2 border-mocha-400 rounded text-mocha-600">
      <Link href={URL_Page}>
        <PictureBanner URL_String={URL_String}/>
        <div className='mx-auto text-center py-5 px-2 border-solid border-t-2 border-mocha-400'>
          <h1 className="text-lg font-bold">{HeaderText}</h1>
          <p className="leading-relaxed">{BodyText}</p>
        </div>
      </Link>
    </div>
  )
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-center' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')', height:'150px'
    }}>
    </div>
  )
}